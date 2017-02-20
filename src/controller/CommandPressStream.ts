import {KeyboardBindings} from "./KeyboardBindings";
import {Command} from "./Command";

export class CommandPressStream {
  listeners = [];

  constructor() {
    document.addEventListener("keydown", e => {
      var boundCommand = KeyboardBindings[e.key];
      if (boundCommand) {
        this.sendCommand(boundCommand);
      }
    })
  }

  addListener(listener: (e: Command) => void) {
    if (this.listeners.indexOf(listener) === -1) {
      this.listeners.push(listener);
    }
  }

  sendCommand(command:Command) {
    this.listeners.forEach(l => {
      l(command);
    });
  }
}