import {KeyboardBindings} from "./KeyboardBindings";
import {Command} from "./Command";

export class KeyPressStream {
  isExecuting: boolean = false;
  listeners:Function[] = [];

  constructor() {
    document.addEventListener("keypress", e => {
      if (this.isExecuting) {
        return;
      }

      this.isExecuting = true;

      this.listeners.forEach(l => {
        l(e.code);
      });

      this.isExecuting = false;
    })
  }

  addListener(listener: (e: string) => void) {
    this.listeners.push(listener);
  }
}