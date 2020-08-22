chrome.runtime.onInstalled.addListener(function() {
    // This extension will need information 
    // from a persistent variable when installed.
    // So make it possible to set a value using 'storage API
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("The Color is green.");
    });

    // Add declared rules to the backgornd script
    // (declarativeContent within runtime.onInstalled)
    // to interact with popup.html
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            // add color to the extention button?
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'developer.chrome.com'},

            })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});