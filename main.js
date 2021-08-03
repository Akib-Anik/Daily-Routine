var navIcon = document.getElementById("navIcon");
var sub = document.getElementById("sub");

sub.style.left = "-25rem";
navIcon.onclick = function(){
    if(sub.style.left == "-25rem"){
        sub.style.left = "0";
    }
    else{
        sub.style.left = "-25rem";
    }
}
