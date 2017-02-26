import {TileType} from "./enum/TileType";
import {Tile} from "./Tile";

export interface Level {
  id: number;
  tiles: {
    [y: number]: {
      [x: number]: Tile
    }
  }
}
