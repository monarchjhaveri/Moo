import {TileType} from "./TileType";
import {Monster} from "./monsters/Monster";

export interface Tile {
  type: TileType,
  monster?: Monster
}