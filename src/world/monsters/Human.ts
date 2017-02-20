import {Monster} from "./Monster";

export class Human implements Monster {
  private _hp:number;
  private _atk:number;
  private _movementPoints:number;


  constructor() {
    this._hp = 10;
    this._atk = 2;
    this._movementPoints = 2;
  }


  get hp():number {
    return this._hp;
  }

  set hp(value:number) {
    this._hp = value;
  }

  get atk():number {
    return this._atk;
  }

  set atk(value:number) {
    this._atk = value;
  }

  get movementPoints():number {
    return this._movementPoints;
  }

  set movementPoints(value:number) {
    this._movementPoints = value;
  }
}