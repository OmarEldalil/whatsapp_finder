chrome.runtime.sendMessage({page : 'wa'})

(function(){

    let res=[],i=0;
    const st=`
    button.myBtns{
        color: #fff;
        background-color: #26a69a;
        text-align: center;
        letter-spacing: .5px;
        font-size: 14px;
        outline: 0;
        margin: 6px ; 
        -webkit-transition: background-color .4s ease-out;
        transition: background-color .4s ease-out;
        cursor: pointer;
        border: none;
        border-radius: 2px;
        display: inline-block;
        height: 36px;
        line-height: 36px;
        padding: 0 16px;
        text-transform: uppercase;
        vertical-align: middle;
        -webkit-tap-highlight-color: transparent;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
        font-weight: normal;
    }

    button.myBtns:hover{
        background-color: #2bbbad;
        -webkit-box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);

    }

    button#scrollbtn{
        display : none;
        top: 7px;
        left: 80px;
    }
    button#resetbtn{
        display : none;
        top: 7px;
        left: 173px;
    }
    `;
    const btn=document.createElement('button'),
        resetBtn=document.createElement('button');

    btn.setAttribute('id','scrollbtn');
    btn.setAttribute('class','_3Burg myBtns');
    resetBtn.setAttribute('id','resetbtn');
    resetBtn.setAttribute('class','_3Burg myBtns');

    btn.appendChild(document.createTextNode('Count'));

    resetBtn.appendChild(document.createTextNode('reset'));

    const el=document.createElement('style');
    const elTxt=document.createTextNode(st);
    el.appendChild(elTxt);

    document.head.appendChild(el);

    document.body.appendChild(btn);
    document.body.appendChild(resetBtn);

    btn.addEventListener('click',function(e){
        let ot= {off: document.getElementById('pane-side').scrollTop}
        document.querySelectorAll('._25Ooe span._1wjpf').forEach(function(x){
            if(res.indexOf(x.innerText) == -1){
                res.push(x.innerText)
            }
        }) ; 
        document.getElementById('pane-side').scrollTop =(i=i+500);
        if(document.getElementById('pane-side').scrollTop == ot.off){
            res.sort();
            let resEnd = res.join('\r\n');
            let inp = document.createElement("textarea");
            inp.value = resEnd;
            document.body.appendChild(inp);
            inp.select();
            document.execCommand("Copy");
            console.log(resEnd);
            alert('Every thing is Copied');
        }else{
            ot.off= document.getElementById('pane-side').scrollTop;
        }
    })

    resetBtn.addEventListener('click',function(){
        res=[],i=0;
        document.getElementById('pane-side').scrollTop = 0
    })
}())