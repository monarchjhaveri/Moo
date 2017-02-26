import { AsciiRenderer } from "./view/AsciiRenderer";
import { MooGame } from "./init/MooGame";
import {KeyPressStream} from "./controller/CommandPressStream";
import {MainState} from "./pojo/MainState";
import {MainStateUtil} from "./pojo/util/MainStateUtil";

var renderer = new AsciiRenderer();
var element = document.getElementById("output");
var keyPressStream = new KeyPressStream();

var gameController = new MooGame(renderer, element, keyPressStream);

gameController.bootUp();
