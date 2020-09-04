import test from 'ava'
import {addition} from '../src'

test('Adds two integers ', t => {
  const num1 = 5
  const num2 = 2
  const expected = 7
  const actual = addition(num1, num2)
  t.deepEqual(actual, expected)
})
