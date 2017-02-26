import {Monster} from "../world/monsters/Monster";
import {Level} from "./Level";
export class MainState {
  private _activeMonster: Monster;
  private _currentLevel: Level;

  get activeMonster():Monster {
    return this._activeMonster;
  }

  set activeMonster(value:Monster) {
    this._activeMonster = value;
  }

  get currentLevel():Level {
    return this._currentLevel;
  }

  set currentLevel(value:Level) {
    this._currentLevel = value;
  }
}