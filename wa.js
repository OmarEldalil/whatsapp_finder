chrome.runtime.sendMessage({page : 'wa'})
$(function(){

    let res=[],i=0;
    const st=`button#scrollbtn{
        display : none;
        padding: 3px;
        background-color: #7f8880;
        color: #fff;
        margin: 0;
        font-size: 14px;
        border: 1px solid;
        cursor: pointer;
        top: 15px;
        left: 80px;
    }
    button#resetbtn{
        display : none;
        padding: 3px;
        background-color: #7f8880;
        color: #fff;
        margin: 0;
        font-size: 14px;
        border: 1px solid;
        cursor: pointer;
        top: 15px;
        left: 140px;
    }
    `;
    const btn=document.createElement('button'),
        resetBtn=document.createElement('button');

    btn.setAttribute('id','scrollbtn');
    btn.setAttribute('class','_3Burg');
    resetBtn.setAttribute('id','resetbtn');
    resetBtn.setAttribute('class','_3Burg');

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
})