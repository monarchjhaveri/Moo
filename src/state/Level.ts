import {TileType} from "./../world/TileType";
import {Tile} from "./../world/Tile";
import {Coords} from "./../world/Coords";
import {Monster} from "./../world/monsters/Monster";

export class Level {
  private _tiles: Tile[][];
  private _monsters: Monster[];

  constructor(
    private height:number,
    private width:number,
    private _id: number
  ) {
    // create a blank level
    var tiles: Tile[][] = this._tiles = [];

    for (var h = 0; h < height; h++) {
      tiles[h] = [];
      for (var w = 0; w < width; w++) {
        tiles[h][w] = {type: TileType.FLOOR}
      }
    }
  }

  get tiles():Tile[][] {
    return this._tiles;
  }

  get id(): number {
    return this._id;
  }
}