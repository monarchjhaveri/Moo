import {Action} from "./Action";
import {Coords} from "./Coords";
export interface CommittedAction {
  monsterId: number,
  action: Action,
  target: Coords
}