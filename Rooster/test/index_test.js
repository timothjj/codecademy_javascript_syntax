/*01*/
const assert = require('assert');
/*02*/
const Rooster = require('../index');
/*03*/
describe('what that rooster do?', () => {
  /*04*/
  describe('.announceDawn', () => {
     /*05*/
    it('returns a rooster call', () => {
       /*06*/
      // Setup
      // Define expected output
      const expected = 'cock-a-doodle-doo!';
      // Exercise
      // Call Rooster.announceDawn and store result in variable
      const actual = Rooster.announceDawn(6); 
      // Verify
      // Use an assert method to compare actual and expected result
      assert.equal(actual,expected)
      // Teardown //is optional 
      /*07 correct the string in index.js and rerun npm test*/
    })
  })
  /*08*/
  describe('.timeAtDawn', () => {
    /*09*/
    it('returns its argument as a string', () => {
      // Setup
      const inputNumber = 12;
      const expected = '12'
      // Exercise
      const actual = Rooster.timeAtDawn(inputNumber);
      // Verify
      assert.strictEqual(actual,expected);
      // Teardown optional
    })
    /*10*/
    it('throws an error if passed a number less than 0', () => {
      // Setup
      const inputNumber = -1;
      const expected = RangeError;
      // Exercise
      // const actual = Rooster.timeAtDawn(inputNumber);
      // Verify
      assert.throws(() => { /*exercise is inline of verify here*/ 
        Rooster.timeAtDawn(inputNumber);
      },expected);
      // Teardown optional
    })
    /*11*/
    it('throws an error if passed a number greater than 23', () => {
      // Setup
      const inputNumber = 24;
      const expected = RangeError;
      // Exercise
      // const actual = Rooster.timeAtDawn(inputNumber);
      // Verify
      assert.throws(() => { /*exercise is inline of verify here*/ 
        Rooster.timeAtDawn(inputNumber);
      },expected);
      // Teardown optional
    })
  })
});
/* 12 done */






