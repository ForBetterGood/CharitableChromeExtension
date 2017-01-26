chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var detectURLs = ["https://www.amazon.co.uk/", "https://www.amazon.com/"];

        detectURLs.forEach(function(URL) {
            details.url = URL ? alert('Should redirect for charity\'s sake') : null
        });
    }, {
        urls: ["https://*/*"]
    }
);
