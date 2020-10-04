import { Grid } from './Grid'
import { Robot } from './Robot'
import { Direction } from './Direction'

export class App  {
  grid: Grid
  robot: Robot

  constructor() {
    this.grid = new Grid
  }

  place(x: number, y: number, direction: Direction) {
    if this.grid.isValidPlacement(x, y) {
      this.robot = new Robot(this.grid)

      this.robot.update(x, y, direction)

      return true
    }

    return false
  }

  move() {
    if !this.robot { return }

    this.robot.move()
  }

  left() {
    if !this.robot { return }

    this.robot.left()
  }

  right() {
    if !this.robot { return }

    this.robot.right()
  }

  report() {
    if !this.robot { return }

    let { x, y, direction } = this.robot.report()

    console.log(x, y, direction)
  }

  getRobot() {
    return this.robot
  }
}

// add support for consuming an input file of commands
let app = new App
