import { TileType } from "./enum/TileType";
import { Monster } from "./Monster";

export interface Tile {
  monster: Monster,
  type: TileType
}