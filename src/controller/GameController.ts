import {Renderer} from "../view/Renderer";
import {Level} from "../world/Level";
import {ButtonPressStream} from "./ButtonPressStream";

export class GameController {
  constructor(
    private renderer:Renderer,
    private output:HTMLElement,
    private level:Level,
    private buttonPressStream:ButtonPressStream
  ) {}

  bootUp() {
    this.renderer.initialize(this.output);
  }

  startGame() {
    this.renderer.render(this.level, this.output);
  }
}