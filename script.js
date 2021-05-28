var count1 = 0
var count2 = 0
var count3 = 0

function add1(){
    var countElem = document.querySelector("#likeme1")
    count1++;
    countElem.innerText = count1 + " Like(s)";
    console.log(count1);
}

function add2(){
    var countElem = document.querySelector("#likeme2")
    count2++;
    countElem.innerText = count2 + " Like(s)"; 
    console.log(count2);
}

function add3(){
    var countElem = document.querySelector("#likeme3")
    count3++;
    countElem.innerText = count3 + " Like(s)"; 
    console.log(count3);
}