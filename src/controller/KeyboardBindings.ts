import {Command} from "./Command";

export const KeyboardBindings: {[key:string]: Command} = {
  "Numpad8": Command.N,
  "Numpad9": Command.NE,
  "Numpad6": Command.E,
  "Numpad3": Command.SE,
  "Numpad2": Command.S,
  "Numpad1": Command.SW,
  "Numpad4": Command.W,
  "Numpad7": Command.NW,
  "Numpad5": Command.REST
};