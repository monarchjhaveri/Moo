import {TileType} from "../pojo/enum/TileType";

var TileSetMap: {[tileType: number]: string} = {};

TileSetMap[TileType.FLOOR] = ".";
TileSetMap[TileType.WALL] = "#";

export { TileSetMap };