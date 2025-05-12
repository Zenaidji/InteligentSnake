export class Utils {
  static createImage(src, width) {
    const image = new Image();
    image.src = src;
    image.width = width;
    return image;
  }
}
