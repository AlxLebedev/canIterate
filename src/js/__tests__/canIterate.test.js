import canIterate from '../canIterate';


test('Iterating a "new Map()"', () => {
  const recieved = canIterate(new Map());
  const expected = true;
  expect(recieved).toBe(expected);
});

test('Iterating a "new Set()"', () => {
  const recieved = canIterate(new Set());
  const expected = true;
  expect(recieved).toBe(expected);
});

test('Iterating a string', () => {
  const recieved = canIterate('Netology');
  const expected = true;
  expect(recieved).toBe(expected);
});

test('Iterating a number', () => {
  const recieved = canIterate(10);
  const expected = false;
  expect(recieved).toBe(expected);
});

test('Iterating a Null', () => {
  const recieved = canIterate(null);
  const expected = false;
  expect(recieved).toBe(expected);
});

test('Iterating an undefined', () => {
  const recieved = canIterate();
  const expected = false;
  expect(recieved).toBe(expected);
});
