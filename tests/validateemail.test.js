const { validateEmail } = require('../modules');
const test = require('tape');

module.exports = test('Testing validateEmail', (t) => {
  // @TODO: Add tests
  validateEmail('313', (err, res) =>{
    t.ok(err, '313 should return an error')
    t.end();
  })
})
