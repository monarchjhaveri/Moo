import {KeyboardBindings} from "./KeyboardBindings";

export class ButtonPressStream {
  listeners = [];

  constructor() {
    document.addEventListener("keydown", e => {
      var boundCommand = KeyboardBindings[e.key];
      if (boundCommand) {
        this.listeners.forEach(l => {
          l(boundCommand);
        });
      }
    })
  }

  addListener(listener: (e: EventListenerOrEventListenerObject) => void) {
    if (this.listeners.indexOf(listener) === -1) {
      this.listeners.push(listener);
    }
  }
}