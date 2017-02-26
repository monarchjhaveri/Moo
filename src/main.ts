import { Level } from "./state/Level";
import { AsciiRenderer } from "./view/AsciiRenderer";
import { MooGame } from "./init/MooGame";
import {KeyPressStream} from "./controller/CommandPressStream";
import {MainState} from "./state/MainState";

var renderer = new AsciiRenderer();
var element = document.getElementById("output");
var mainState = new MainState();
var commandPressStream = new KeyPressStream();

var gameController = new MooGame(renderer, element, commandPressStream, mainState);

gameController.bootUp();
