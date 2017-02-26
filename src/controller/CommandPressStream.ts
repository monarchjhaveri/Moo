import {KeyboardBindings} from "./KeyboardBindings";
import {Command} from "./Command";

export class KeyPressStream {
  listeners:Function[] = [];

  constructor() {
    document.addEventListener("keypress", e => {
      this.listeners.forEach(l => {
        l(e.code);
      });
    })
  }

  addListener(listener: (e: string) => void) {
    this.listeners.push(listener);
  }
}