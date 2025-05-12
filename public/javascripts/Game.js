import { Mobile } from "./Mobile.js";
import { Utils } from "./Utils.js";

const BOARD_SRC = "../images/board.png";
export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = 100;
    this.y = 100;
    this.dx = -2;
    this.dy = -2;
    this.request = null;
    this.mobile = new Mobile(this.x, this.y, this.dx, this.dy, canvas);
    this.BoardImg = Utils.createImage(BOARD_SRC, canvas.width);
    this.context = this.canvas.getContext("2d");
  }

  moveAndDraw() {
    if (this.mobile.STATE === Mobile.MOVE_STATE.STOP) {
      window.cancelAnimationFrame(this.request);
      console.log("canceled", this.mobile.STATE);
      return 0;
    }
    this.clearContext();
    this.mobile.move();
    this.mobile.draw();
    window.requestAnimationFrame(this.moveAndDraw.bind(this));
  }

  clearContext() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  keyDownActionHandler(event) {
    switch (event.key) {
      case "ArrowUp":
      case "Up":
        this.mobile.moveUp();
        break;

      case "ArrowDown":
      case "Down":
        this.mobile.moveDown();
        break;

      case "ArrowLeft":
      case "Left":
        this.mobile.moveLeft();
        break;

      case "ArrowRight":
      case "Right":
        this.mobile.moveRight();
        break;
      default:
        return;
    }
    event.preventDefault();
  }
}
