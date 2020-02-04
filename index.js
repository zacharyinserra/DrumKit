//Add event listeners to buttons
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", handleClick);
})

document.addEventListener("keydown", function(event) {
  playSound(event.key);
});

function handleClick() {
  var audio;
  var btn = this.innerHTML;
  playSound(btn);
  buttonAnimation(btn);
}

function playSound(btn) {
  switch (btn) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    default:
  }
  audio.play();
}

function buttonAnimation(currentKey) {

  var activeBtn = document.querySelector("." + currentKey);
  activeBtn.classList.add("pressed");
  setTimeout(function() {
    activeBtn.classList.remove("pressed");
  }, 100);

}
