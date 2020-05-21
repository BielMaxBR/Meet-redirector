var _redirectURL = "";

chrome.webRequest.onHeadersReceived.addListener(function (details) {
  if (_redirectURL == "") {
    console.log(details)
    _redirectUrl = details.url.substring(48);
    copyTextToClipboard(_redirectUrl)
    return { redirectUrl: _redirectUrl /*Redirection URL*/ };
  }
}, {
  urls: ["http://*/*", "https://*/*"]
}, ["blocking", "responseHeaders"]);

function copyTextToClipboard(text) {
  var copyFrom = document.createElement("textarea");

  copyFrom.textContent = text;

  document.body.appendChild(copyFrom);

  copyFrom.select();

  document.execCommand('copy');

  copyFrom.blur();

  document.body.removeChild(copyFrom);
}