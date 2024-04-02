let title = $("#title");
let arr = ["green","red","yellow","blue","green","red","yellow","blue","green","red","yellow","blue"];
let ans = [];
let userans = [];
let ptr_userans = 0;
let ptr_ans = 0;
let level = 1;

let spacebarEventListener = $(document).on("keydown", (event) => {
    if (event.key === " ") {
        $("#start").css("visibility", "hidden");
        $("#container").removeClass("startclass");
        $(document).off("keydown", spacebarEventListener); 
        showAns();
        start();
    }
});



async function start(){
    let validation = null;
    do{
        validation = await getUser();
        ptr_ans++;
        ptr_userans++;
        showAns();
    }while(validation);
}



function  getRandom_Value(){
    return arr[Math.floor(Math.random()*arr.length)];
}
async function getUser(){
    let val = null;
    val = $("#green").on("click",()=>{
        // $("#green").off("click",val);
        userans.push("green");
        return new Promise((resolve,reject)=>{
        if(validate(ptr_ans,ptr_userans)){
            resolve(true);
        }
        else{
            reject(false);
        }
        });
    });
    val = $("#red").on("click",()=>{
        // $("#green").off("click",val);
        userans.push("red");
        return new Promise((resolve,reject)=>{
        if(validate(ptr_ans,ptr_userans)){
            resolve(true);
        }
        else{
            reject(false);
        }
        });
    });
    val = $("#yellow").on("click",()=>{
        // $("#green").off("click",val);
        userans.push("yellow");
        return new Promise((resolve,reject)=>{
        if(validate(ptr_ans,ptr_userans)){
            resolve(true);
        }
        else{
            reject(false);
        }
        });
    });
    val = $("#blue").on("click",()=>{
        // $("#green").off("click",val);
        userans.push("blue");
        return new Promise((resolve,reject)=>{
        if(validate(ptr_ans,ptr_userans)){
            resolve(true);
        }
        else{
            reject(false);
        }
        });
    });  

    
}

async function validate(ptr1,ptr2){
        if(ans[ptr2]==userans[ptr1]){
        //    let srt = document.querySelector("#title").innerHTML.slice(srt.length-1) = ptr2+1; 
            console.log("correct answer!");
            level++;
            return true;
            // ptr2++;
            // await showAns();
            // return ++ptr2;
        }
        else{
            console.log("gameover");
            return false;
            // return ++ptr2;
        }
}

async function showAns() {
    ans.push(getRandom_Value());
    let index = 0;
    let interval = setInterval(async () => {
                            if (index >= ans.length) {
                                return clearInterval(interval);
                            }
                            await blink(ans[index]);
                            index++;
                        }, 1000);
}

async function blink(val){
    $("#"+val).addClass("select");
    const  timeOut = setTimeout(() => {
        $("#"+val).removeClass("select");
    }, 250); 
}
    

  

