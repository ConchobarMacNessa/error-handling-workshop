const { validateName } = require('../modules');
const test = require('tape');

module.exports = test('Testing validateName', (t) => {
  // @TODO: Add tests
  validateName(567890, (err, res)=>{
    t.ok(err, 'Should return an error if name includes numbers');
    t.ok(err instanceof TypeError, 'The error should be an instance of TypeError');
    t.equal(err.message, 'Name is not a string', 'error message should be Name is not a string');

  });
  validateName('a', (err, res)=>{
    t.ok(err, 'Should return an error is string is less than two letters long');
    t.ok(err instanceof RangeError, 'The error should be an instance of RangeError');
    t.equal(err.message, 'Name is less than 2 characters length', 'error message should be Name is less than 2 characters length');
  })
  validateName('Passing', (err, res)=>{
      t.ok(res, 'Should return a result');
      t.notok(err, 'Shouldn"t return an error');
      t.equal(res, 'Passing', 'Result should equal Passing');
    });
    validateName('Passing^', (err, res)=>{
        t.ok(err, 'Should return an error');
        t.equal(err.message, 'Name contains characters other than letter, dash, apostrophe');
        t.end();
      });
})
