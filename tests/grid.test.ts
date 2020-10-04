import { Grid } from ".././src/Grid";
import { Direction } from '.././src/Direction'

let grid

beforeEach(() => {
  grid = new Grid
});

test('can create Grid with default dimensions', () => {
  expect(grid.width).toEqual(5)
  expect(grid.height).toEqual(5)
})

//   - PLACE X,Y,F
describe('.place', () => {
  test('can place robot in a valid position', () => {
    expect(grid.place(0, 1, Direction.North)).toBeTruthy()
  })

  test('cannot place robot in invalid position', () => {
    expect(grid.place(0, 10, Direction.South)).toBeFalsy()
  })
})

describe('.move', () => {
  describe('when robot has not been placed', () => {
    test('will return false', () => {
      expect(grid.move()).toBeFalsy()
    })
  })

  describe('when robot has already been placed', () => {
    beforeEach(() => {
      grid.place(0, 1, Direction.South)
    })

    test('will return true', () => {
      expect(grid.move()).toBeTruthy()
    })
  })
})

describe('.isValidPlacement', () => {
  // todo: test edge cases of what constitues a valid move
})
