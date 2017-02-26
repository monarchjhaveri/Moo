import {MainState} from "../MainState";
export class MainStateUtil {
  public static create(): MainState {
    return {
      playerMonsterId: null,
      currentLevelId: null,
      levels: {}
    }
  }
}