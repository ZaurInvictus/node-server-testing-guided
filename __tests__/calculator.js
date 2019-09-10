describe('calculator', () => {
// ADD
describe('add() method', () => {
 it('should add two numbers', () => {
  // Arrange: setup for the test
    const valA = 2
    const valB = 2
    const expectedResult = 4
// Act: execute the code you want to test
const actual = add(valA, valB)
// Assert: check that the code works
expect(actual).toBe(expectedResult )
})

  // ADD TWO NUMBERS
it('adds two numbers - second iteration', () => {
  expect(add(2, 2)).toBe(4)
  expect(add(2, 3)).toBe(5)
  expect(add(-2, 2)).toBe(0)
  expect(add(0, 2)).toBe(2)
 })

  // ADD MULTIPLE NUMBERS
  it('adds multiple numbers', () => {
    expect(add(1, 2, 3)).toBe(6)
    expect(add(1, -2, 3)).toBe(2)
    expect(add(1, 2, 4)).toBe(7)
    expect(add(1, 2, 0)).toBe(3)
  })


  // CODE TO TEST
  function add(...args) {
   return args.reduce((total, val) => {
     return total + val   
   }, 0) // starting at 0 for total
  }

 })


// MULTIPLY
 describe('multiply() method', () => {
 // TTD FLOW
  describe('should return product of two numbers', () => {
   expect(multiply(3, 7)).toBe(21)
   expect(multiply(0, 7)).toBe(0)
 })
 })

// MULTIPLY NEGATIVE NUMBERS
 describe('multiply() method', () => {
 // TTD FLOW
  describe('should return product of two numbers', () => {
   expect(multiply(-3, -7)).toBe(21)
   expect(multiply(0, -7)).toBe(-0)
 })
 })

})

// CODE TO TEST
function add(a, b) {
  return a + b
}

function multiply(a, b) {
  return a * b
}


// change the add method to support adding any number of values separated by comma
// calling add(1, 2, 3) the return should be 6