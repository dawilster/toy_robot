import { App } from ".././src/App";

let app

beforeAll(() => {
  app = new App
});

test('adds 1 + 2 to equal 3', () => {
  expect(app.sum(1, 2)).toBe(3);
});