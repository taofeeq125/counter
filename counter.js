
function addNum() {
    document.querySelector('.num').innerHTML++
    if (document.querySelector('.num').innerHTML > 0) {
        document.querySelector('.num').style.color = "green";
    }
    else {
        document.querySelector('.num').style.color = "red";
    }
}
function subNum() {
    document.querySelector('.num').innerHTML--
    if (document.querySelector('.num').innerHTML < 0) {
        document.querySelector('.num').style.color = "red";
    }
    else {
        document.querySelector('.num').style.color = "green";
    }
}
// let button = document.querySelector("button")
// button.addEventListener("addNum",add)

// function addNum(){
//     document.getElementsByTagName("button").style.borderColor  ="green";
// }


// if(addNum()){
//     document.querySelector('.num').style.borderColor  ="green";
// }
// else{
//     document.querySelector('.num').style.borderColor  ="red";
// }

// btn[0].addEventListener('click')