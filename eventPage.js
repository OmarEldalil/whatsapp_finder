chrome.runtime.onMessage.addListener(function (request, sender, sendresponse) {
    if(request.wa == "ShowPageAction"){
        chrome.tabs.query({active : true , currentWindow: true}, function (tabs) {
            chrome.pageAction.show(tabs[0].id);
        })
    }
})