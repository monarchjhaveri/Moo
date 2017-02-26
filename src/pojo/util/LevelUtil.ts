import {Level} from "../Level";
import {TileType} from "../enum/TileType";

export class LevelUtil {
  private static nextLevelId = 1;

  public static create(height:number, width:number): Level {
    debugger;
    var level: Level = {
      id: this.nextLevelId,
      tiles: {}
    };
    this.nextLevelId++;

    for (var h = 0; h < height; h++) {
      level.tiles[h] = [];
      for (var w = 0; w < width; w++) {
        level.tiles[h][w] = {
          type: TileType.FLOOR,
          monster: null
        }
      }
    }

    return level;
  }
}