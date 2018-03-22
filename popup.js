$(function () {
    var res=[],i=0;

    var reset = function () {
        res=[];
        i=0
    }

    var scrollBtn = document.getElementById("scrollBtn"),
        resetBtn = document.getElementById("resetBtn");

    scrollBtn.addEventListener('click',function (e) {
        i +=1;
        $('#ptag').text('counter: ' + i);
        console.log(i);
    })

    resetBtn.addEventListener('click',function (e) {
        reset();
    })
})