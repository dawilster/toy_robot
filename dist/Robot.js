"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = void 0;
const Direction_1 = require("./Direction");
class Robot {
    constructor(grid) {
        this.grid = grid;
    }
    move() {
        let { x, y } = this.proposedMovement();
        if (this.grid.isValidPlacement(x, y)) {
            this.update(x, y, this.direction);
            return true;
        }
        else {
            return false;
        }
    }
    left() {
        this.direction = this.proposedLeftDirection();
    }
    right() {
        this.direction = this.proposedRightDirection();
    }
    update(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
    report() {
        return {
            x: this.x,
            y: this.y,
            direction: this.direction
        };
    }
    proposedRightDirection() {
        let direction;
        switch (this.direction) {
            case Direction_1.Direction.North:
                direction = Direction_1.Direction.East;
                break;
            case Direction_1.Direction.South:
                direction = Direction_1.Direction.West;
                break;
            case Direction_1.Direction.East:
                direction = Direction_1.Direction.South;
                break;
            case Direction_1.Direction.West:
                direction = Direction_1.Direction.North;
                break;
        }
        return direction;
    }
    proposedLeftDirection() {
        let direction;
        switch (this.direction) {
            case Direction_1.Direction.North:
                direction = Direction_1.Direction.West;
                break;
            case Direction_1.Direction.South:
                direction = Direction_1.Direction.East;
                break;
            case Direction_1.Direction.East:
                direction = Direction_1.Direction.North;
                break;
            case Direction_1.Direction.West:
                direction = Direction_1.Direction.South;
                break;
        }
        return direction;
    }
    proposedMovement() {
        let x = this.x;
        let y = this.y;
        switch (this.direction) {
            case Direction_1.Direction.North:
                y--;
                break;
            case Direction_1.Direction.South:
                y++;
                break;
            case Direction_1.Direction.East:
                x++;
                break;
            case Direction_1.Direction.West:
                x--;
                break;
        }
        return {
            x, y
        };
    }
}
exports.Robot = Robot;
