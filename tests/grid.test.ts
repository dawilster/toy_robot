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

describe('.isValidPlacement', () => {
  // todo: test edge cases of what constitues a valid move
})
