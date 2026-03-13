// math.test.js
const test = require('node:test')
const assert = require('node:assert/strict')
const taskOne = require('./taskOne.js')

test('findKthLargest function tests', () => {

    assert.throws(() => taskOne.findKthLargest([], 30), /Array must not be empty/, "First argument should not be an empty array")

    assert.throws(() => taskOne.findKthLargest([6, 2 ,1], 0), /Invalid k value/, "Second argument should not be 0")

    assert.notStrictEqual(taskOne.findKthLargest([55 ,1 , 36, 2], 3), 1, "should not be 1")

    assert.strictEqual(taskOne.findKthLargest([55 ,1 , 36, 2], 1), 55, "should be 55")

    assert.strictEqual(taskOne.findKthLargest([43, 43, 1, 7, 100], 4), 1, "should be 1 even with duplicate numbers")

    console.log('All tests passed for findKthLargest function!')
})