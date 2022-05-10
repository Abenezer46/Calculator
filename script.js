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
       