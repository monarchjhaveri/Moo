import {Level} from "./Level";

export interface MainState {
  playerMonsterId: number;
  currentLevelId: number;
  levels: {
    [levelId: number]: Level
  }
}