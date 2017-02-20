import {TileType} from "../world/TileType";

var TileSetMap: {[tileType: number]: string} = {};

TileSetMap[TileType.FLOOR] = ".";
TileSetMap[TileType.WALL] = "#";

export { TileSetMap };