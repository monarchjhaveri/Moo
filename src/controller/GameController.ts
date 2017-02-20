import {Renderer} from "../view/Renderer";
import {Level} from "../world/Level";

export class GameController {
  constructor(
    private renderer:Renderer,
    private output:HTMLElement,
    private level:Level
  ) {}

  initialize() {
    this.renderer.initialize(this.output);
  }

  startGame() {
    this.renderer.render(this.level, this.output);
  }
}