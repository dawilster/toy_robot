"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const Grid_1 = require("./Grid");
const Robot_1 = require("./Robot");
const Direction_1 = require("./Direction");
const fs_1 = __importDefault(require("fs"));
class App {
    constructor() {
        this.grid = new Grid_1.Grid;
    }
    run(commands) {
        console.log(commands);
        commands.forEach((command) => {
            let commandName = command.split(' ')[0];
            if (commandName === 'PLACE') {
                let strArr = command.replace("PLACE ", "").split(",");
                this.place(+strArr[0], +strArr[1], Direction_1.Direction[strArr[2].trim()]);
            }
            else if (commandName === 'MOVE') {
                this.move();
            }
            else if (commandName === 'LEFT') {
                this.left();
            }
            else if (commandName === 'RIGHT') {
                this.right();
            }
            else if (commandName === 'REPORT') {
                this.report();
            }
        });
    }
    place(x, y, direction) {
        if (this.grid.isValidPlacement(x, y)) {
            this.robot = new Robot_1.Robot(this.grid);
            this.robot.update(x, y, direction);
            return true;
        }
        console.log(x, y, 'Not valid coordinates');
        return false;
    }
    move() {
        if (!this.robot) {
            console.log('Robot has not been placed');
            return;
        }
        this.robot.move();
    }
    left() {
        if (!this.robot) {
            console.log('Robot has not been placed');
            return;
        }
        this.robot.left();
    }
    right() {
        if (!this.robot) {
            console.log('Robot has not been placed');
            return;
        }
        this.robot.right();
    }
    report() {
        if (!this.robot) {
            console.log('Robot has not been placed');
            return;
        }
        let { x, y, direction } = this.robot.report();
        console.log(x, y, direction);
    }
    getRobot() {
        return this.robot;
    }
}
exports.App = App;
// add support for consuming an input file of commands
let app = new App;
let commands = fs_1.default.readFileSync('commands.txt', 'utf8');
app.run(commands.split("\n"));
