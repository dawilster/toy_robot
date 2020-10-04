import { Direction } from './Direction'

export class Grid {
  width: number
  height: number

  constructor(width=5, height=5) {
    this.width = width
    this.height = height
  }

  isValidPlacement(x: number, y: number) {
    return (x < this.width && x >= 0 ) && (y < this.height && y >= 0)
  }
}