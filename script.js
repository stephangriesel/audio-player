let songs = ["1.mp3", "2.mp3", "3.mp3", "3.mp3", "4.mp3", "5.mp3"];
let poster = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

let songtitle = document.getElementById("songtitle");
let fillbar = document.getElementById("fill");

let song = new Audio();
let currentsong = 0;

window.onload = playsong;

function playsong() {
    song.src = songs[currentsong];

    songtitle.textContent = songs[currentsong];

    song.play();

}

function playOrPauseSong() {

    if(song.paused) {
        song.play();
        $("#play img").attr("src","pause.png");
    } else {
        song.pause();
        $("#play img").attr("src","play.png");
    }
}
