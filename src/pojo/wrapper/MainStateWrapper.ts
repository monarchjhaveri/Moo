import {MainState} from "../MainState";
import {Level} from "../Level";
import {Monster} from "../Monster";
import {LevelWrapper} from "./LevelWrapper";
export class MainStateWrapper {
  constructor(private mainState:MainState) {}

  public getLevel(id: number): Level {
    return this.mainState.levels[id];
  }

  public getCurrentLevel():Level {
    return this.getLevel(this.mainState.currentLevelId);
  }

  getPlayerMonster():Monster {
    var id = this.mainState.playerMonsterId;

    var levelWrapper = new LevelWrapper(this.getCurrentLevel());
    var tileResult = levelWrapper.findTileWithMonster(id);

    return (tileResult && tileResult.tile && tileResult.tile.monster) || null;
  }
}