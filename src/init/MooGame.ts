import {Renderer} from "../view/Renderer";
import {Level} from "../state/Level";
import {KeyPressStream} from "./../controller/CommandPressStream";
import {Command} from "./../controller/Command";
import {Human} from "../world/monsters/Human";
import {MainState} from "../state/MainState";

export class MooGame {
  constructor(
    private renderer:Renderer,
    private outputElement:HTMLElement,
    private keyPressStream:KeyPressStream,
    private mainState:MainState
  ) {}

  bootUp() {
    // called once when the app first starts up
    this.renderer.initialize(this.outputElement);
    this.startGame();
  }

  startGame() {
    // called when the game starts; for example, if the player clicks a "New Game" button
    var level = new Level(10, 8, 1);
    level.tiles[1][1].monster = new Human();
    this.mainState.currentLevel = level;

    this.doRender(this.mainState, this.outputElement);
    this.keyPressStream.addListener((keyPress) => this.handleKeypress(keyPress));
  }

  handleKeypress(keyPress: string) {
    this.doRender(this.mainState, this.outputElement);
  }

  private doRender(mainState: MainState, outputElement: HTMLElement) {
    this.renderer.beforeRender(this.outputElement);
    this.renderer.render(mainState, outputElement);
    this.renderer.afterRender(outputElement);
  }
}