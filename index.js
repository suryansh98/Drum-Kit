// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I got clicked!");
// }


var buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', function (){
            var audio;
             if(keyy == 'w')
                audio = new Audio("sounds/crash.mp3");
            else if(keyy == 'a')
            audio = new Audio("sounds/kick-bass.mp3");
            else if(keyy == 's')
            audio = new Audio("sounds/snare.mp3");
            else if(keyy == 'd')
            audio = new Audio("sounds/tom-1.mp3");
            else if(keyy == 'j')
            audio = new Audio("sounds/tom-2.mp3");
            else if(keyy == 'k')
            audio = new Audio("sounds/tom-3.mp3");
            else 
                audio = new Audio("sounds/tom-4.mp3");

            audio.play();
         })
});




// var audio = new Audio("sounds/tom-1.mp3");
//              audio.play();

document.addEventListener("keypress", function(event){

    var keyy = event.key;

    makeSound(keyy);
}); 

function makeSound(keyy){
    var audio;
             if(keyy == 'w')
                audio = new Audio("sounds/crash.mp3");
            else if(keyy == 'a')
            audio = new Audio("sounds/kick-bass.mp3");
            else if(keyy == 's')
            audio = new Audio("sounds/snare.mp3");
            else if(keyy == 'd')
            audio = new Audio("sounds/tom-1.mp3");
            else if(keyy == 'j')
            audio = new Audio("sounds/tom-2.mp3");
            else if(keyy == 'k')
            audio = new Audio("sounds/tom-3.mp3");
            else 
                audio = new Audio("sounds/tom-4.mp3");

            audio.play();
}