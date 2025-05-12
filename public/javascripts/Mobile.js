import { Utils } from "./Utils.js";
export class Mobile {
  static MOBILE_WIDTH = 40;
  static MOVE_STATE = { UP: 1, LEFT: 2, RIGHT: 3, DOWN: 4, STOP: 5 };

  constructor(x, y, dx, dy, canvas, src = "../images/ball.png") {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.canvas = canvas;
    this.image = Utils.createImage(src, 20);
    this.STATE = Mobile.MOVE_STATE.UP;
    this.context = this.canvas.getContext("2d");
    this.pdx = dx;
    this.pdy = dy;
  }

  move() {
    if (
      this.x + Math.abs(this.dx) + Mobile.MOBILE_WIDTH >= this.canvas.width ||
      this.x - Math.abs(this.dx) <= 0 ||
      this.y - Math.abs(this.dy) - Mobile.MOBILE_WIDTH <= 0 ||
      this.y + Math.abs(this.dy) + Mobile.MOBILE_WIDTH >= this.canvas.height
    ) {
      this.STATE = Mobile.MOVE_STATE.STOP;
      return;
    }
    if (this.STATE != Mobile.MOVE_STATE.STOP) {
      this.x += this.dx;
      this.y += this.dy;
    }
  }

  moveUp() {
    console.log("move up");
    this.dx = 0;
    this.dy = this.pdy;
    this.dy = -Math.abs(this.dy);
    this.STATE = Mobile.MOVE_STATE.UP;
  }

  moveDown() {
    console.log("move down");
    this.dx = 0;
    this.dy = this.pdy;
    this.dy = Math.abs(this.dy);
    this.STATE = Mobile.MOVE_STATE.DOWN;
  }

  moveLeft() {
    this.dx = this.pdx;
    this.dy = 0;
    this.dx = -Math.abs(this.dx);
    this.STATE = Mobile.MOVE_STATE.LEFT;
    console.log("move left");
  }
  moveRight() {
    this.dx = this.pdx;
    this.dy = 0;
    this.dx = Math.abs(this.dx);
    this.STATE = Mobile.MOVE_STATE.RIGHT;
    console.log("move right");
  }
  draw() {
    this.context.drawImage(
      this.image,
      this.x,
      this.y,
      Mobile.MOBILE_WIDTH,
      Mobile.MOBILE_WIDTH
    );
  }

  stop() {
    this.STATE = Mobile.MOVE_STATE.STOP;
  }
}
