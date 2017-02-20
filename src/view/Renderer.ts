import {Level} from "../world/Level";

export interface Renderer {
  initialize(output: HTMLElement): void;
  beforeRender(output: HTMLElement): void;
  render(level: Level, output: HTMLElement): void;
}