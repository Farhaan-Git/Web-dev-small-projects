let title = $("#title");
let arr = ["green","red","yellow","blue","green","red","yellow","blue","green","red","yellow","blue"];
let ans = [];
let level = 1;
function start_game(){
    $(document).keydown((event)=>{ 
        if(event.key===" "){
            $("#start").css("visibility","hidden");
            $("#container").removeClass("startclass");
        }
    });
    return true;
}

// $(".box").click(validation());
function  getRandom_Value(){
    return arr[Math.floor(Math.random()*arr.length)];
}

function showAns() {
    let index = 0;
    let interval = setInterval(() => {
        if (index >= ans.length) {
            clearInterval(interval);
            return;
        }
        blink(ans[index]);
        index++;
    }, 1000); // Adjust the delay between each blink here (in milliseconds)
}

 function blink(val){
    $("#"+val).addClass("select");
    setTimeout(() => {
        $("#"+val).removeClass("select");
    }, 500); 
}


if(start_game()){
    let i = 0;
    while(i!=3){
        ans.push(getRandom_Value());
        i++;
    }
    console.log(ans);
    showAns();
}