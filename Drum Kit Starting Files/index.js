
for(let i = 0;i<document.querySelectorAll("button").length;i++){
    if(i==4){
        document.querySelectorAll("button")[i].addEventListener("click",function(){
            let aud = new Audio("sounds/crash.mp3");
            aud.play();
        });
    }
    else if(i==5){
        document.querySelectorAll("button")[i].addEventListener("click",function(){
            let aud = new Audio("sounds/kick-bass.mp3");
            aud.play();
        });
    }
    else  if(i==6){
        document.querySelectorAll("button")[i].addEventListener("click",function(){
            let aud = new Audio("sounds/snare.mp3");
            aud.play();
        });
    }
    else{
        document.querySelectorAll("button")[i].addEventListener("click",function(){
            let aud = new Audio("sounds/tom-"+(i+1)+".mp3");
            aud.play();
        });
    }
}

document.addEventListener("keydown",function(event){
    switch(event.key){
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/crash.mp3").play();
            break;
        case "k":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case "l":
            new Audio("sounds/snare.mp3").play();
            break;
            
    }
})
