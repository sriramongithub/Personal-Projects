var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i<numberOfDrumButtons; i++) {
document.querySelectorAll(".drum") [i].addEventListener("click", function () {

    // detecting button press //

    var buttonInnerHTML = this.innerHTML;


    makeSound(buttonInnerHTML);


    buttonAnimation(buttonInnerHTML);


});
}

// detecting keyboard press //

document.addEventListener("keydown", function(event){
    
    makeSound(event.key);

    buttonAnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case "w":
            var crash = new Audio("C:/Users/srira/OneDrive/Documents/Web Development/Drum Kit/sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickBass = new Audio("C:/Users/srira/OneDrive/Documents/Web Development/Drum Kit/sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            var snare = new Audio("C:/Users/srira/OneDrive/Documents/Web Development/Drum Kit/sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("C:/Users/srira/OneDrive/Documents/Web Development/Drum Kit/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("C:/Users/srira/OneDrive/Documents/Web Development/Drum Kit/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("C:/Users/srira/OneDrive/Documents/Web Development/Drum Kit/sounds/tom-3.mp3");
                tom3.play();
                break;
        case "l":
            var tom4 = new Audio("C:/Users/srira/OneDrive/Documents/Web Development/Drum Kit/sounds/tom-4.mp3");
            tom4.play();
            break;
    
        default: console.log(buttonInnerHTML);
          
    }
}

function buttonAnimation(currentKey){
    
     var activeButton = document.querySelector("." + currentKey)
     activeButton.classList.add("pressed");
     setTimeout(function(){
    activeButton.classList.remove("pressed")}, 100);

}