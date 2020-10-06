import { Grid } from './Grid'
import { Robot } from './Robot'
import { Direction } from './Direction'
import fs from 'fs';

export class App  {
  grid: Grid
  robot: Robot

  constructor() {
    this.grid = new Grid
  }

  run(commands: string[]) {
    commands.forEach((command) => {
      let commandName = command.split(' ')[0]

      if (commandName === 'PLACE') {
        let strArr = command.replace("PLACE ", "").split(",")

        this.place(+strArr[0], +strArr[1], Direction[strArr[2].trim()])
      } else if (commandName === 'MOVE') {
        this.move()
      } else if (commandName === 'LEFT') {
        this.left()
      } else if (commandName === 'RIGHT') {
        this.right()
      } else if (commandName === 'REPORT') {
        this.report()
      }
    })
  }

  place(x: number, y: number, direction: Direction) {
    if (this.grid.isValidPlacement(x, y)) {
      this.robot = new Robot(this.grid)

      this.robot.update(x, y, direction)

      return true
    }

    console.log(x, y, 'Not valid coordinates')

    return false
  }

  move() {
    if (!this.robot) { 
      console.log('Robot has not been placed')

      return
    }

    this.robot.move()
  }

  left() {
    if (!this.robot) { 
      console.log('Robot has not been placed')

      return
    }

    this.robot.left()
  }

  right() {
    if (!this.robot) { 
      console.log('Robot has not been placed')

      return
    }

    this.robot.right()
  }

  report() {
    if (!this.robot) { 
      console.log('Robot has not been placed')

      return
    }

    let { x, y, direction } = this.robot.report()

    console.log(x, y, direction)
  }

  getRobot() {
    return this.robot
  }
}

let app = new App

let commands = fs.readFileSync('commands.txt','utf8');

app.run(commands.split("\n"))
