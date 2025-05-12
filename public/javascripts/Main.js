import { Game } from "./Game.js";

const init = () => {
  const canvas = document.getElementById("canvas");
  const game = new Game(canvas);
  game.moveAndDraw();
  window.addEventListener("keydown", game.keyDownActionHandler.bind(game));
  console.log("init");
};
window.addEventListener("load", init);
