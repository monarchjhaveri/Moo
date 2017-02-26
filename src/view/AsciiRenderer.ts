import { Level } from "../state/Level";
import {TileSetMap} from "./TileSetMap";
import {MainState} from "../state/MainState";
import {Renderer} from "./Renderer";

export class AsciiRenderer implements  Renderer{
  initialize(output: HTMLElement) {
    output.style.setProperty("letter-spacing", "6px");
    output.style.setProperty("font-size", "12px");
  }

  beforeRender(output: HTMLElement) {
    output.innerHTML = "";
  }

  render(mainState: MainState, output: HTMLElement) {
    var characterBuffer: string[][] = [];

    var level = mainState.currentLevel;
    AsciiRenderer.paintFloor(characterBuffer, level);
    AsciiRenderer.printBuffer(characterBuffer, output);
  }

  afterRender(output: HTMLElement) {

  }

  private static paintFloor(characterBuffer:string[][], level:Level) {
    for (var t = 0; t < level.tiles.length; t++) {
      characterBuffer[t] = [];

      for (var c = 0; c < level.tiles[t].length; c++) {
        var tile = level.tiles[t][c];

        if (tile.monster != null) {
          characterBuffer[t][c] = "@";
        } else {
          characterBuffer[t][c] = TileSetMap[tile.type];
        }
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