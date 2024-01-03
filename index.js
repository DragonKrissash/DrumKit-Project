
for(var a=0;a<document.querySelectorAll("button").length;a++){
document.querySelectorAll("button")[a].addEventListener("click",function(){
var buttonhtml=this.innerHTML;
    makeSound(buttonhtml);
    buttonAnimation(buttonhtml);
});
}
document.addEventListener("keypress",function(event){
    console.log(event.key);
    var pressed=event.key;
    makeSound(pressed);
    buttonAnimation(pressed);
});

function makeSound(key){
    switch(key){
        case "w":
            var audio=new Audio('./sounds/tom-1.mp3')
            audio.play();
            break;
        case "a":
            var audio=new Audio('./sounds/tom-2.mp3')
            audio.play();
            break;
        case "s":
            var audio=new Audio('./sounds/tom-3.mp3')
            audio.play();
            break;
        case "d":
            var audio=new Audio('./sounds/tom-4.mp3')
            audio.play();
            break;
        case "j":
            var audio=new Audio('./sounds/snare.mp3')
            audio.play();
            break;
        case "k":
            var audio=new Audio('./sounds/crash.mp3')
            audio.play();
            break;
        case "l":
            var audio=new Audio('./sounds/kick-bass.mp3')
            audio.play();
            break;
        default:console.log("Error");
        }
}
function buttonAnimation(button){
    var activekey=document.querySelector("."+button);
    activekey.classList.add("pressed");
    setTimeout(function(){console.log("delayed")
    activekey.classList.remove("pressed");
},500);
    
    
}