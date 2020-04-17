import * as idcard from '../src/idcard';

test('isIDCard', () => {
  const { isIDCard } = idcard;
  expect(isIDCard('421081190001016012')).toBe(true);
  expect(isIDCard('42108119000101601X')).toBe(true);
  expect(isIDCard('42108119000101601')).toBe(false);
  expect(isIDCard('YA8838065')).toBe(false);
});
