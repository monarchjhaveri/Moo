import {TileSetMap} from "./TileSetMap";
import {Renderer} from "./Renderer";
import {MainState} from "../pojo/MainState";
import {Level} from "../pojo/Level";
import {MainStateWrapper} from "../pojo/wrapper/MainStateWrapper";
import {LevelWrapper} from "../pojo/wrapper/LevelWrapper";
import {Tile} from "../pojo/Tile";

export class AsciiRenderer implements  Renderer{
  initialize(output: HTMLElement) {
    output.style.setProperty("letter-spacing", "6px");
    output.style.setProperty("font-size", "12px");
  }

  beforeRender(output: HTMLElement) {
    output.innerHTML = "";
  }

  render(mainState: MainState, output: HTMLElement) {
    var wrapper = new MainStateWrapper(mainState);
    var characterBuffer: string[][] = [];

    var level = wrapper.getCurrentLevel();
    AsciiRenderer.paintFloor(characterBuffer, level);
    AsciiRenderer.printBuffer(characterBuffer, output);
  }

  afterRender(output: HTMLElement) {

  }

  private static paintFloor(characterBuffer:string[][], level:Level) {
    var wrapper = new LevelWrapper(level);

    wrapper.forEachTile((tile:Tile, y: number, x: number) => {
      characterBuffer[y] = characterBuffer[y] || [];

      var charToPrint:string = null;
      if (tile.monster != null) {
        charToPrint = "@";
      } else {
        charToPrint = TileSetMap[tile.type];
      }

      characterBuffer[y][x] = charToPrint;
    });
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