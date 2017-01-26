chrome.webRequest.onBeforeRequest.addListener(
    function(details) {

        var charityLinks = [{
            name: 'RNLI',
            url: 'http://www.amazon.co.uk/gp/homepage.html/026-5210700-2589212?ie=UTF8&tag=rnliorguk-21&link_code=hom'
        }, {
            name: 'Macmillan',
            url: 'http://www.amazon.co.uk/b?node=118856031&tag=macmcancsupps-21'
        }, {
            name: 'OCD-UK',
            url: 'http://www.amazon.co.uk/exec/obidos/redirect-home?tag=ocduk02-21'
        }, {
            name: 'Allergy UK',
            url: 'http://www.amazon.co.uk/b/ref=topnav_storetab_w_h_?ie=UTF8&node=468294&tag=allergyuk-21'
        }, {
            name: 'Beanstalk',
            url: 'http://www.amazon.co.uk/?ie=UTF8&amp%3Bsite=amazon&link_code=hom&tag=volunteerread-21'
        }, {
            name: 'Saint Francis Hospice',
            url: 'http://www.amazon.co.uk/s?me=A2ETR4ARX8KZ&merchant=A2ETR4ARX8KZ&qid=1432073141'
        }, {
            name: 'Hospice Aid UK',
            url: 'www.amazon.co.uk/?&tag=hoaiuk-21'
        }, {
            name: 'Weldmar Hospicecare',
            url: 'http://www.amazon.co.uk/?_encoding=UTF8&tag=weldmhospitru-21'
        }, {
            name: 'Families Need Fathers',
            url: 'http://www.amazon.co.uk/exec/obidos/redirect-home?tag=wwwfnforguk-21&placement=home_multi.gif&site=amazon'
        }, {
            name: 'Epilepsy Society',
            url: 'http://www.amazon.co.uk/exec/obidos/redirect-home?tag=thenationalsoc04&site=books'
        }, {
            name: 'Epilepsy Action',
            url: 'http://www.amazon.co.uk/exec/obidos/redirect-home?tag=britishepilepsya&site=amazon'
        }, {
            name: 'Bumblebee Conservation Trust',
            url: 'http://www.amazon.co.uk/?_encoding=UTF8&tag=bumblebeecons-21&linkCode=ur2&camp=1634&creative=6738'
        }];

        if (details.url == "https://www.amazon.co.uk/" || details.url == "https://www.amazon.com/gp/homepage.html") {
            var charity = charityLinks[Math.floor(Math.random() * charityLinks.length)];

            var notifyOptions = {
                type: "basic",
                title: "Donating to " + charity.name,
                message: "If you order anything from Amazon in this session, at least 5% will go to " + charity.name + ". Go you!",
                iconUrl: "icons/icon48.png"
            }

            chrome.notifications.create(notifyOptions);

            return { redirectUrl: charity.url };
        };
    }, {
        urls: ["https://*/*"]
    }, ["blocking"]
);
