var count = 0
var countElem = document.querySelector("#likeme")
function add1(){
    count++;
    countElem.innerText= count + " Like(s)" 
    console.log(count)
}
