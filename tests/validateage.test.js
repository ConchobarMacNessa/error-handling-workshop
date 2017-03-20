const { validateAge } = require('../modules');
const test = require('tape');

module.exports = test('Testing validateAge', (t) => {
  // @TODO: Add tests
  validateAge(100, (err, res)=>{

    t.ok(err, 'Should return an error if age is greater than 80');
    t.ok(err instanceof RangeError, 'The error should be an instance of RangeError')
    t.equal(err.message, 'Age is greater than 80', 'Error message should equal argument no.2');
  });
  validateAge('Hello', (err, res)=>{

    t.ok(err, 'Should return an error if isNAN');
    t.ok(err instanceof TypeError, 'The error should be an instance of TypeError')
    t.equal(err.message, 'Age does not equal a number', 'Error message should equal argument no.2');
  });
  validateAge(25, (err, res)=>{

    t.ok(res, 'Should return a result');
    t.notok(err, 'Shouldn"t return an error');
    t.equal(res, 25, 'Age should equal 25');
    t.end();
  });
})
