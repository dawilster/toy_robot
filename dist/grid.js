"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
class Grid {
    constructor(width = 5, height = 5) {
        this.width = width;
        this.height = height;
    }
    isValidPlacement(x, y) {
        return (x < this.width && x >= 0) && (y < this.height && y >= 0);
    }
}
exports.Grid = Grid;
