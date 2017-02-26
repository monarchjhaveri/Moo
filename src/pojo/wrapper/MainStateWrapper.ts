import {MainState} from "../MainState";
import {Level} from "../Level";
export class MainStateWrapper {
  constructor(private mainState:MainState) {}

  public getLevel(id: number): Level {
    return this.mainState.levels[id];
  }

  public getCurrentLevel():Level {
    return this.getLevel(this.mainState.currentLevelId);
  }
}