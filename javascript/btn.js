
var sli = document.querySelector('.slides');
var slid = document.querySelectorAll('.slides li');
var idx = 0;
var cou = slid.length;
var pre = document.querySelector('#prev');
var nex = document.querySelector('#next');


function mov(num) {
    sli.style.left = `${-num * 266.7}px`;
    idx = num;

};
nex.addEventListener("click", function () {
    if (idx < cou - 4) {

        mov(idx + 1);
    } else {
        mov(0);
    }
});
pre.addEventListener("click", function () {
    if (idx > 0) {

        mov(idx - 1);
    } else {
        mov(cou - 4);
    }
});





