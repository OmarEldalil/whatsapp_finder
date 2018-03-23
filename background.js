chrome.runtime.onMessage.addListener(function (msg) {
    if(msg.page == 'wa'){
        chrome.tabs.query({currentWindow: true}, function(tabs){
            const myTab = tabs.filter(function (item) {
                return item.url == "https://web.whatsapp.com/"
            })
            chrome.pageAction.show(myTab[0].id);
        });
    }
})

