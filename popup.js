document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#clearBtn').addEventListener('click',function () {
        chrome.tabs.query({active : true , currentWindow : true}, function (tabs) {
            chrome.tabs.executeScript(tabs[0].id , {
                code : `document.getElementById("scrollbtn").style.display = "none";
                        document.getElementById("resetbtn").style.display = "none";`
            })
        })
    })
    document.querySelector('#showBtn').addEventListener('click',function () {
        chrome.tabs.query({active : true , currentWindow : true}, function (tabs) {
            chrome.tabs.executeScript(tabs[0].id , {
                code : `document.getElementById("scrollbtn").style.display = "block";
                        document.getElementById("resetbtn").style.display = "block";`
            })
        })
    })
})