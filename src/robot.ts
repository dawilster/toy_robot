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

    if (this.grid.isValidPlacement(x, y)) {
      this.update(x, y, this.direction)

      return true
    } else {
      return false
    }
  }

  left() {
    this.direction = this.proposedLeftDirection()
  }

  right() {
    this.direction = this.proposedRightDirection()
  }

  update(x:number, y:number, direction: Direction) {
    this.x = x
    this.y = y
    this.direction = direction
  }

  report() {
    return {
      x: this.x,
      y: this.y,
      direction: this.direction
    }
  }

  private proposedRightDirection() {
    let direction

    switch (this.direction) {
      case Direction.North:
        direction = Direction.East
        break;
      case Direction.South:
        direction = Direction.West
        break;
      case Direction.East:
        direction = Direction.South
        break;
      case Direction.West:
        direction = Direction.North
        break;
    }

    return direction
  }

  private proposedLeftDirection() {
    let direction

    switch (this.direction) {
      case Direction.North:
        direction = Direction.West
        break;
      case Direction.South:
        direction = Direction.East
        break;
      case Direction.East:
        direction = Direction.North
        break;
      case Direction.West:
        direction = Direction.South
        break;
    }

    return direction
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