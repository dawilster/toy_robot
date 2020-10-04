import { Direction } from './Direction'
import { Robot } from './Robot'

export class Grid {
  width: number
  height: number
  robot: Robot

  constructor(width=5, height=5) {
    this.width = width
    this.height = height
  }

  place(x: number, y: number, direction: Direction) {
    if this.isValidPlacement(x, y) {
      if !this.robot {
        this.robot = new Robot(this)
      }

      this.robot.update(x, y, direction)

      return true
    } else {
      return false
    }
  }

  move() {
    return this.robot ? this.robot.move() : false
  }

  getRobot() {
    return this.robot
  }

  isValidPlacement(x: number, y: number) {
    return (x < this.width && x >= 0 ) && (y < this.height && y >= 0)
  }
}