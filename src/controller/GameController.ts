import {Renderer} from "../view/Renderer";
import {Level} from "../world/Level";
import {CommandPressStream} from "./CommandPressStream";
import {Command} from "./Command";

export class GameController {
  constructor(
    private renderer:Renderer,
    private output:HTMLElement,
    private level:Level,
    private commandPressStream:CommandPressStream
  ) {}

  bootUp() {
    this.renderer.initialize(this.output);
  }

  startGame() {
    //this.commandPressStream.addListener(this.handleCommand);

    this.renderer.render(this.level, this.output);
  }

  handleCommand(command: Command) {
    switch(command) {
      case Command.N:
        break;
      case Command.NE:
        break;
      case Command.E:
        break;
      case Command.SE:
        break;
      case Command.S:
        break;
      case Command.SW:
        break;
      case Command.W:
        break;
      case Command.NW:
        break;
      case Command.REST:
        break;
      default:
        console.error("Unkown command", command);
        break;
    }

    this.renderer.render(this.level, this.output);
  }
}