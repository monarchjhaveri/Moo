import {Level} from "../Level";
import {TileType} from "../enum/TileType";
import {Tile} from "../Tile";
import {Monster} from "../Monster";
import {FindTileResult} from "./types/FindTileResult";

type ForEachTileCallback = (tile:Tile, y: number, x: number) => void;


export class LevelWrapper {
  private _height: number;
  private _width: number;

  constructor(private _level:Level) {
    this._height = Object.keys(_level.tiles).length;
    this._width = Object.keys(_level.tiles[0]).length;
  }

  findTileWithMonster(id: number): FindTileResult {
    var returnObject: FindTileResult = null;

    this.forEachTile((tile, y, x) => {
      if (returnObject === null && (tile.monster && tile.monster.id === id)) {
        returnObject = {
          levelId: this._level.id,
          y: y,
          x: x,
          tile: tile
        };
      }
    });

    return returnObject || null;
  }

  forEachTile(f:ForEachTileCallback):void {
    for (var y = 0; y < this._height; y++) {
      for (var x = 0; x < this._width; x++) {
        f(this._level.tiles[y][x], y, x);
      }
    }
  }

  get level() {
    return this._level;
  }


  get height():number {
    return this._height;
  }

  get width():number {
    return this._width;
  }
}