import {Command} from "./Command";
import {MainState} from "../pojo/MainState";
import {MainStateWrapper} from "../pojo/wrapper/MainStateWrapper";
import {MonsterWrapper} from "../pojo/wrapper/MonsterWrapper";
import {LevelWrapper} from "../pojo/wrapper/LevelWrapper";
export class MapViewController {
  public static handleCommand(command:Command, mainState:MainState): void {
    var playerMonsterId = mainState.playerMonsterId;

    var mainStateWrapper = new MainStateWrapper(mainState);
    var levelWrapper = new LevelWrapper(mainStateWrapper.getCurrentLevel());

    var result = levelWrapper.findTileWithMonster(playerMonsterId);
    var monsterWrapper = result && result.tile && result.tile.monster &&
      new MonsterWrapper(result.tile.monster, levelWrapper, mainStateWrapper);

    switch(command) {
      case(Command.N):
        monsterWrapper.moveN();
        break;
      case(Command.NE):
        monsterWrapper.moveNE();
        break;
      case(Command.E):
        monsterWrapper.moveE();
        break;
      case(Command.SE):
        monsterWrapper.moveSE();
        break;
      case(Command.S):
        monsterWrapper.moveS();
        break;
      case(Command.SW):
        monsterWrapper.moveSW();
        break;
      case(Command.W):
        monsterWrapper.moveW();
        break;
      case(Command.NW):
        monsterWrapper.moveNW();
        break;
      case(Command.REST):
        monsterWrapper.rest();
        break;
      default:
        break;
    }
  }
}