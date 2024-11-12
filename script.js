let isPlaying = false;
let video = document.getElementById("myVideo");
let playButton = document.getElementById("playButton");

playButton.addEventListener("click", function() {
if (isPlaying) {
    video.pause();
    playButton.textContent = "▷";
 } else {
    video.play();
    playButton.textContent = "||";
}
isPlaying = !isPlaying;
});