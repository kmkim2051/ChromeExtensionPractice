let page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(kButtonColors) {
    // item : each RGB value
    for (let item of kButtonColors) {
        // make button element
        let button = document.createElement('button');
        // set button color
        button.style.background = item;
        // add event executed when a button clicked
        button.addEventListener('click', function() {
            chrome.storage.sync.set({color: item}, () => {
                console.log('color is ' + item);
            })
        });
        // add each button to the div 'buttonDiv'
        page.appendChild(button);
    }
}

constructOptions(kButtonColors);