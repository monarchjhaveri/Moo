import {Monster} from "../Monster";
import {MainState} from "../MainState";
import {Level} from "../Level";
import {MainStateWrapper} from "./MainStateWrapper";
import {LevelWrapper} from "./LevelWrapper";
export class MonsterWrapper {
  constructor(private monster:Monster, private levelWrapper: LevelWrapper, private mainStateWrapper:MainStateWrapper) {

  }

  private move(yDiff: number, xDiff: number) {
    var level = this.levelWrapper.level;
    var tileResult = this.levelWrapper.findTileWithMonster(this.monster.id);

    var origin = [tileResult.y, tileResult.x];
    var target = [tileResult.y + yDiff, tileResult.x + xDiff];

    if (target[0] < 0 || target[0] > (this.levelWrapper.height - 1) || target[1] < 0 || target[1] > (this.levelWrapper.width - 1)) {
      return;
    }

    var originTile = level.tiles[origin[0]][origin[1]];
    var targetTile = level.tiles[target[0]][target[1]];

    targetTile.monster = originTile.monster;
    originTile.monster = null;
  }

  moveN() {
    this.move(-1, 0);
  }

  moveNE() {
    this.move(-1, 1);
  }

  moveE() {
    this.move(0, 1);
  }

  moveSE() {
    this.move(1, 1);
  }

  moveS() {
    this.move(1, 0);
  }

  moveSW() {
    this.move(1, -1);
  }

  moveW() {
    this.move(0, -1);
  }

  moveNW() {
    this.move(-1, -1);
  }

  rest() {
    // do nothing
  }


}