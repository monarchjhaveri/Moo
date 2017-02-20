import { Level } from "../world/Level";
import {TileSetMap} from "./TileSetMap";

export class AsciiRenderer {
  initialize(output: HTMLElement) {
    output.style.setProperty("letter-spacing", "6px");
    output.style.setProperty("font-size", "12px");
  }

  beforeRender(output: HTMLElement) {
    output.innerHTML = "";
  }

  render(level: Level, output: HTMLElement) {
    var characterBuffer: string[][] = [];

    AsciiRenderer.paintFloor(characterBuffer, level);
    AsciiRenderer.printBuffer(characterBuffer, output);
  }

  private static paintFloor(characterBuffer:string[][], level:Level) {
    for (var t = 0; t < level.tiles.length; t++) {
      characterBuffer[t] = [];

      for (var c = 0; c < level.tiles[t].length; c++) {
        var tile = level.tiles[t][c];
        characterBuffer[t][c] = TileSetMap[tile.type];
      }
    }
  }

  private static printBuffer(characterBuffer:string[][], output:HTMLElement) {
    characterBuffer.forEach(row => {
      row.forEach(character => {
        output.innerHTML += character;
      });

      output.innerHTML += "<br/>";
    });
  }
}