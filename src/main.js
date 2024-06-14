import { gameOptions } from "./commonSettings";
import Preloader from "./scenes/Preloader";
import StartGame from "./scenes/StartGame";
import PlayGame from "./scenes/PlayGame";
import EndGame from "./scenes/EndGame";
import { CANVAS, Game } from "phaser";
var game;

if (!localStorage["1st"]) {
    localStorage.setItem("1st", 0);
    localStorage.setItem("2nd", 0);
    localStorage.setItem("3rd", 0);
    localStorage.setItem("4th", 0);
    localStorage.setItem("5th", 0);
}

window.onload = function () {
    var gameConfig = {
        type: CANVAS,
        width: gameOptions.tileSize * 4 + gameOptions.tileSpacing * 5,
        height: gameOptions.tileSize * 5 + gameOptions.tileSpacing * 5,
        backgroundColor: 0xffffff,
        scene: [Preloader, StartGame, PlayGame, EndGame],
    };
    game = new Game(gameConfig);
    window.focus();
    resize();
    window.addEventListener("resize", resize, false);
};

// for visual use
function resize() {
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;
    if (windowRatio < gameRatio) {
        canvas.style.width = windowWidth + "px";
        canvas.style.height = windowWidth / gameRatio + "px";
    } else {
        canvas.style.width = windowHeight * gameRatio + "px";
        canvas.style.height = windowHeight + "px";
    }
}
