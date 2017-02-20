import { Level } from "./world/Level";
import { AsciiRenderer } from "./view/AsciiRenderer";
import {GameController} from "./controller/GameController";

var renderer = new AsciiRenderer();
var element = document.getElementById("output");
var level = new Level(10, 8);

var gameController = new GameController(renderer, element, level);

gameController.initialize();
gameController.startGame();