document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#clearBtn').addEventListener('click',function () {
        chrome.tabs.query({active : true , currentWindow : true}, function (tabs) {
            chrome.tabs.executeScript(tabs[0].id , {
                code : `document.getElementById('pane-side').scrollTop = 0;`
            })
        })
    })
    document.querySelector('#showBtn').addEventListener('click',function () {
        chrome.tabs.query({active : true , currentWindow : true}, function (tabs) {
            chrome.tabs.executeScript(tabs[0].id , {
                code :
                   `var scrollInterval = null,res=[];
                    function contScroll() {
                        let ot= {off: document.getElementById('pane-side').scrollTop}
                        document.querySelectorAll('._25Ooe span._1wjpf').forEach(function(nameElement){
                            if(res.indexOf(nameElement.innerText) == -1){
                                res.push(nameElement.innerText)
                            }
                        }) ;
                        document.getElementById('pane-side').scrollTop +=500;
                        if(document.getElementById('pane-side').scrollTop == ot.off){
                            res.sort();
                            let resEnd = res.join('\\r\\n');
                            let inp = document.createElement("textarea");
                            inp.value = resEnd;
                            document.body.appendChild(inp);
                            inp.select();
                            document.execCommand("Copy");
                            clearInterval(scrollInterval);
                            alert('Every thing is Copied');
                        }
                    }
            
                    scrollInterval = setInterval(contScroll,50);`
            })
        })
    })
})
