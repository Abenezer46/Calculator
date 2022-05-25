let form = document.getElementsByTagName("form");
let disp = document.getElementById("disp");


function val(result){
    disp.value = disp.value + result;
}

function calculate(){
    if(disp.value == ""){
        alert("Please enter a number");
    }
    else{
        disp.value = eval(disp.value);
    }
}

let clear = document.getElementById('clear');
clear.onclick = function() {
    disp.value = '';
}

let del = document.getElementById('delete');
del.onclick = function() {
    let strng = document.getElementById("disp").value;
    document.getElementById("disp").value = strng.substring(0,strng.length-1);
}


if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
        console.log(registration);
    })
    .catch( error => {
        console.log("SW Registered failed!");
        console.log(error);
    })
}
       