var _redirectURL = "";

chrome.webRequest.onHeadersReceived.addListener(function (details) {
  if (_redirectURL == "") {
    if (details.url.indexOf('aula') != -1) {
      console.log(details)
      _redirectUrl = details.url.substring(48);
      copyTextToClipboard(_redirectUrl)
      return { redirectUrl: _redirectUrl /*Redirection URL*/ };
    }
    else if ( details.url.substring(36) == "" ){
      console.log(details)
      _redirectUrl = details.url;
      copyTextToClipboard(_redirectUrl)
    }
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