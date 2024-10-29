const minionImage = document.getElementById("minion");
const minionAudio = new Audio("minionAudio.mp3");

minionImage.addEventListener("click", function() {
    minionAudio.play();
})

// losered was here
