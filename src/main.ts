import { Level } from "./world/Level";
import { AsciiRenderer } from "./view/AsciiRenderer";
import {GameController} from "./controller/GameController";
import {CommandPressStream} from "./controller/CommandPressStream";

var renderer = new AsciiRenderer();
var element = document.getElementById("output");
var level = new Level(10, 8, 1);
var commandPressStream = new CommandPressStream();

var gameController = new GameController(renderer, element, level, commandPressStream);

gameController.bootUp();
gameController.startGame();
