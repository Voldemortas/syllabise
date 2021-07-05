import {add} from './add'

describe('test add function', () => {
  test('should add 1 2 3', () => {
    expect(add(1, 2, 3)).toStrictEqual(6)
  })
})
