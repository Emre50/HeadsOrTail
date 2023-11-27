
const flipbutton = document.getElementById("flip-button");


flipbutton.addEventListener("click" , () => {
    const number = Math.floor(Math.random()*2+1);
    document.querySelector("img").setAttribute("src", "./coin" + number + ".png");
    if(number === 1){
        document.querySelector("h1").innerHTML = "HEADS";
    }else{
        document.querySelector("h1").innerHTML = "TAILS";
    
    }
});
