import { Robot } from '.././src/Robot'
import { Grid } from '.././src/Grid'
import { Direction } from '../src/Direction'
let robot 
let grid

beforeEach(() => {
  grid = new Grid

  robot = new Robot(grid)
})

describe('.move', () => {
  describe('when placement is invalid', () => {
    beforeEach(() => {
      // jest.spyOn(Grid.prototype, 'isValidPlacement').mockImplementation(() => false);
      robot.update(0,0, Direction.North)
    })

    test('returns false', () => {
      expect(robot.move()).toBeFalsy()
    })
  })

  describe('when placement is valid', () => {
    beforeEach(() => {
      robot.update(2, 3, Direction.South)
    })

    test('returns false', () => {
      expect(robot.move()).toBeTruthy()
    })
  })
})