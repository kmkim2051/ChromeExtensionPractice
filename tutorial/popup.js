let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.set({color: "..."}) 
// in background.js

// Get data from storage by using json key
chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});

// triggers a programatically injected content script
changeColor.onclick = (element) => {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
};