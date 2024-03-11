
for(let i = 0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        handleEvent(document.querySelectorAll("button")[i].innerText);

});
}
function handleEvent(event){
switch(event){
    case "w":
        buttonAnimations(event);
        new Audio("sounds/tom-1.mp3").play();
        break;
    case "a":
        buttonAnimations(event);
        new Audio("sounds/tom-2.mp3").play();
        break;
    case "s":
        buttonAnimations(event);
        new Audio("sounds/tom-3.mp3").play();
        break;
    case "d":
        buttonAnimations(event);
        new Audio("sounds/tom-4.mp3").play();
        break;
    case "j":
        buttonAnimations(event);
        new Audio("sounds/crash.mp3").play();
        break;
    case "k":
        buttonAnimations(event);
        new Audio("sounds/kick-bass.mp3").play();
        break;
    case "l":
        buttonAnimations(event);
        new Audio("sounds/snare.mp3").play();
        break;
        
}
}
document.addEventListener("keydown",function(event){
handleEvent(event.key);
});

function buttonAnimations(event){
document.querySelector("."+event).classList.toggle("pressed");
setTimeout(function(){document.querySelector("."+event).classList.toggle("pressed");},100);
}
