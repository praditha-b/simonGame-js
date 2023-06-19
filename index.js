let len = document.querySelectorAll(".drum").length

for(let i=0; i<len; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonTxt = this.innerHTML;
        handleClick(buttonTxt);
        buttonAnimation(buttonTxt);
    });    
}


document.addEventListener("keydown",function(event){
    handleClick(event.key);
    buttonAnimation(event.key);
})



function handleClick(key)
{
    

    switch(key)
    {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d": 
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var tom3 = new Audio("sounds/snare.mp3");
            tom3.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/crash.mp3");
            tom3.play();
            break;
        case "l":
            var tom3 = new Audio("sounds/kick-bass.mp3");
            tom3.play();
            break;

    }
}

function buttonAnimation(currentKey)
{
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    
    window.setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}

