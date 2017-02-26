import {Renderer} from "../view/Renderer";
import {KeyPressStream} from "./../controller/CommandPressStream";
import {Command} from "./../controller/Command";
import {MainState} from "../pojo/MainState";
import {LevelUtil} from "../pojo/util/LevelUtil";
import {MainStateUtil} from "../pojo/util/MainStateUtil";
import {KeyboardBindings} from "../controller/KeyboardBindings";
import {MapViewController} from "../controller/MapViewController";

export class MooGame {
  private mainState: MainState;

  constructor(
    private renderer:Renderer,
    private outputElement:HTMLElement,
    private keyPressStream:KeyPressStream
  ) {}

  bootUp() {
    // called once when the app first starts up
    this.initializeState();
    this.renderer.initialize(this.outputElement);
    this.startGame();
  }

  startGame() {
    // called when the game starts; for example, if the player clicks a "New Game" button
    this.doRender(this.mainState, this.outputElement);
    this.keyPressStream.addListener((keyPress) => this.handleKeypress(keyPress));
  }

  handleKeypress(keyPress: string) {
    var command = KeyboardBindings[keyPress];
    if (command !== null && command !== undefined) {
      this.handleCommand(command);
    }
  }

  private doRender(mainState: MainState, outputElement: HTMLElement) {
    this.renderer.beforeRender(this.outputElement);
    this.renderer.render(mainState, outputElement);
    this.renderer.afterRender(outputElement);
  }

  private initializeState():void {
    var playerId = 1;

    this.mainState = MainStateUtil.create();

    var level = LevelUtil.create(10, 8);

    level.tiles[1][1].monster = {
      id: playerId,
      hp: 1,
      name: "Player"
    };

    this.mainState.currentLevelId = level.id;
    this.mainState.playerMonsterId = playerId;
    this.mainState.levels[level.id] = level;
  }

  private handleCommand(command:Command):void {
    MapViewController.handleCommand(command, this.mainState);
    this.doRender(this.mainState, this.outputElement);
  }
}