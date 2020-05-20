var _redirectURL = "";

chrome.webRequest.onHeadersReceived.addListener(function (details) {
  if (_redirectURL == "") {
    console.log(details)
      _redirectUrl = details.url.substring(48);

      return { redirectUrl: _redirectUrl /*Redirection URL*/ };
  }
}, {
  urls: ["http://*/*", "https://*/*"]
}, ["blocking", "responseHeaders"]);