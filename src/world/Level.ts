import {TileType} from "./TileType";
import {Tile} from "./Tile";
import {Coords} from "./Coords";
import {Monster} from "./monsters/Monster";

export class Level {
  private _tiles: Tile[][];
  private _monsters: Monster[];
  private _monsterPositions: {[id:number]: Coords};
  private _monsterMovementOrder: number[]; // monster IDs

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