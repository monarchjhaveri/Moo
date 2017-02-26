import {MainState} from "../pojo/MainState";

export interface Renderer {
  initialize(output: HTMLElement): void;
  beforeRender(output: HTMLElement): void;
  render(mainState: MainState, output: HTMLElement):void;
  afterRender(output: HTMLElement): void;
}