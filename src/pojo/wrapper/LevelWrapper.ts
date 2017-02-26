import {Level} from "../Level";
import {TileType} from "../enum/TileType";
import {Tile} from "../Tile";

type ForEachTileCallback = (tile:Tile, y: number, x: number) => void;

export class LevelWrapper {
  private height: number;
  private width: number;

  constructor(private level:Level) {
    this.height = Object.keys(level.tiles).length;
    this.width = Object.keys(level.tiles[0]).length;
  }

  forEachTile(f:ForEachTileCallback):void {
    for (var y = 0; y < this.height; y++) {
      for (var x = 0; x < this.width; x++) {
        f(this.level.tiles[y][x], y, x);
      }
    }
  }
}