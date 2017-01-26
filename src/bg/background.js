chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (details.url == "https://www.amazon.co.uk/" || details.url == "https://www.amazon.com/gp/homepage.html") {
            alert('AMAZON!');
            return { redirectUrl: "https://google.com" };
        };
    }, {
        urls: ["https://*/*"]
    },
    ["blocking"]
);
