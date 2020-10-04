import { Direction } from './Direction'
import { Grid } from './Grid'

export class Robot {
  x: number
  y: number
  direction: Direction;
  grid: Grid

  constructor(grid: Grid) {
    this.grid = grid
  }

  move() {
    let { x, y } = this.proposedMovement()

    if this.grid.isValidPlacement(x, y) {
      this.update(x, y, this.direction)

      return true
    } else {
      return false
    }
  }

  update(x:number, y:number, direction: Direction) {
    this.x = x
    this.y = y
    this.direction = direction
  }

  private proposedMovement() {
    let x = this.x
    let y = this.y

    switch (this.direction) {
      case Direction.North:
        y--
        break;
      case Direction.South:
        y++
        break;
      case Direction.East:
        x++
        break;
      case Direction.West:
        x--
        break;
    }

    return {
      x, y
    }
  }
}