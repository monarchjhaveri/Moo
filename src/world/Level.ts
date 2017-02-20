import {TileType} from "./TileType";
import {Tile} from "./Tile";

export class Level {
  private _tiles: Tile[][];

  constructor(private height:number, private width:number) {
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
}