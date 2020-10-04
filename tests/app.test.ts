import { App } from '.././src/App';
import { Direction } from '.././src/Direction'

let app

beforeAll(() => {
  app = new App
});

test('example usage', () => {
  app.move()
  app.left()
  app.place(2, 4, Direction.North)
  app.left()
  app.move()
  app.right()
  app.move()
  expect(app.getRobot().report()).toEqual({ x: 1, y: 3, direction: Direction.North })
  app.report()
  app.place(0, 10, Direction.North)
  app.place(0, 0, Direction.East)
  app.move()
  app.right()
  app.move()
  expect(app.getRobot().report()).toEqual({ x: 1, y: 1, direction: Direction.South })
  app.report()
})

describe('.place', () => {
  test('returns false when coords are invalid', () => {
    expect(app.place(0, 10, Direction.North)).toBeFalsy()
  })

  test('returns false when coords are negative', () => {
    expect(app.place(0, -10, Direction.South)).toBeFalsy()
  })

  test('returns true when coords are valid', () => {
    expect(app.place(0, 2, Direction.North)).toBeTruthy()
  })
})

describe('.move', () => {
  describe('when robot is placed', () => {
    beforeAll(() => {
      app.place(0, 2, Direction.South)
    })

    test('moves robot correctly', () => {
      app.move()

      expect(app.getRobot().report()).toEqual({ x: 0, y: 3, direction: Direction.South })
    })
  })

  describe('when robot has not been placed', () => {
    test('returns false', () => {
      expect(app.move()).toBeFalsy()
    })
  })
})

describe('.left', () => {
  beforeAll(() => {
    app.place(0, 2, Direction.South)
  })

  test('turns robot 90 degs left', () => {
    app.left()

    expect(app.getRobot().report()).toEqual({ x: 0, y: 2, direction: Direction.East })
  })
})

describe('.right', () => {
  beforeAll(() => {
    app.place(0, 2, Direction.East)
  })

  test('turns robot 90 degs right', () => {
    app.right()

    expect(app.getRobot().report()).toEqual({ x: 0, y: 2, direction: Direction.South })
  })
})