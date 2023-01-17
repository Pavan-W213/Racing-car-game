let bluecar = document.getElementById("bluecar");
let redcar = document.getElementById("redcar");
let result = document.getElementById("result");
let score = document.getElementById("score");
let game = document.getElementById("game");
let counter = 0;

bluecar.addEventListener("animationiteration", function () {
  let random = Math.floor(Math.random() * 3) * 130;
  bluecar.style.left = random + "px";
  counter++;
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode == "39") {
    let redcarleft = parseInt(
      window.getComputedStyle(redcar).getPropertyValue("left")
    );
    if (redcarleft < 260) {
      redcar.style.left = redcarleft + 130 + "px";
    }
  }

  if (e.keyCode == "37") {
    let redcarleft = parseInt(
      window.getComputedStyle(redcar).getPropertyValue("left")
    );
    if (redcarleft > 0) {
      redcar.style.left = redcarleft - 130 + "px";
    }
  }
});

setInterval(function Gameover() {
  let bluecartop = parseInt(
    window.getComputedStyle(bluecar).getPropertyValue("top")
  );
  let bluecarleft = parseInt(
    window.getComputedStyle(bluecar).getPropertyValue("left")
  );
  let redcarleft = parseInt(
    window.getComputedStyle(redcar).getPropertyValue("left")
  );

  if (bluecarleft === redcarleft && bluecartop > 250 && bluecartop < 450) {
    result.style.display = "block";
    game.style.display = "none";
    score.innerHTML = `score:${counter}`;
    counter = 0;
  }
}, 10);
