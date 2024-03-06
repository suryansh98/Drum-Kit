// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick(){
//     alert("I got clicked!");
// }


document.querySelectorAll(".drum").forEach(function(drum) {
    drum.addEventListener("click", function(event) {
        var keyy = this.textContent; 
        console.log(event);
        makeSound(keyy);
    });
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
            makeAnimation(keyy);
            
}

function makeAnimation(keyy){
    document.querySelector("." + keyy).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("." + keyy).classList.remove("pressed");
    }, 100);
}