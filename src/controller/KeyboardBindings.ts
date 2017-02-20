import {Command} from "./Command";

export const KeyboardBindings: {[key:string]: Command} = {
  "8": Command.N,
  "9": Command.NE,
  "6": Command.E,
  "3": Command.SE,
  "2": Command.S,
  "1": Command.SW,
  "4": Command.W,
  "7": Command.NW,
  "5": Command.REST
};