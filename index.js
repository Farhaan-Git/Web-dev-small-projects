function myFunc() {
    let a = document.querySelectorAll(".grid-container img");
    a[0].classList.add("img1");
    a[1].classList.add("img2");
    let val1 =(Math.floor(Math.random()*6) + 1);
    let val2 = (Math.floor(Math.random()*6) + 1);
    let str1 = "images/dice" + val1 + ".png";
    document.querySelector(".grid-container .img1").setAttribute("src", str1);
    let str2 = "images/dice" + val2 + ".png";
    document.querySelector(".grid-container .img2").setAttribute("src", str2);
    if(val1>val2){
        document.querySelector("h1").innerText="Congratulations Player 1";
    }
    else if(val1===val2){
        document.querySelector("h1").innerText="It is a Draw :(";
    }
    else{
        document.querySelector("h1").innerText="Congratulations Player 2";
    }
}
