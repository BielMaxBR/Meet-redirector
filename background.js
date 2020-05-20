var _redirectURL = "";
// "https://aula-digital.plurall.net/hangouts/*"
chrome.webRequest.onHeadersReceived.addListener(function (details) {
  if (_redirectURL == "") {
    console.log(details)
      _redirectUrl = details.url.substring(48); //.substring(details.initiator.indexOf("room=h") + 6)

      return { redirectUrl: _redirectUrl /*Redirection URL*/ };
  }
}, {
  urls: ["http://*/*", "https://*/*"]
}, ["blocking", "responseHeaders"]);