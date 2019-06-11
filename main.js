var endPoint =
  "https://www.jsonstore.io/84f4a3ee066d894c00aa7b73e4072da213be8b6834d35597d07896c5b6588068";

function getrandom() {
  var random_string =
    Math.random()
      .toString(32)
      .substring(2, 5) +
    Math.random()
      .toString(32)
      .substring(2, 5);
  return random_string;
}

function geturl() {
  var url = document.getElementById("urlinput").value;
  var protocol_ok =
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("ftp://");
  if (!protocol_ok) {
    newurl = "http://" + url;
    return newurl;
  } else {
    return url;
  }
}

function genhash() {
  if (window.location.hash == "") {
    window.location.hash = getrandom();
  }
}

function send_request(url) {
  this.url = url;
  $.ajax({
    url: endpoint + "/" + window.location.hash.substr(1),
    type: "POST",
    data: JSON.stringify(this.url),
    dataType: "json",
    contentType: "application/json; charset=utf-8"
  });
}

function shorturl() {
  var longurl = geturl();
  genhash();
  send_request(longurl);
}

function genLongURL() {
  var hashh = window.location.hash.substr(1);

  if (window.location.hash != "") {
    $.getJSON(endpoint + "/" + hashh, function(data) {
      data = data["result"];

      if (data != null) {
        $("#urlLong").html(data);
      }
    });
  }
}

/* Another way to generate random string

function getrandom() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

*/
