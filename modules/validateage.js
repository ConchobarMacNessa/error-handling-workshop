// @TODO: Build validateAge
// Integer (must be greater than 16 but less than 80)
const validateAge = (age, cb) => {
  if (typeof age !== 'number'){
    cb(new TypeError('Age does not equal a number'));
  }
  else if (age>79){
    cb(new RangeError('Age is greater than 80'))
  }
  else if (age<16){
    cb(new RangeError('Age is less than 16'));
  }
  else {
    cb(null, age);
  }
}

module.exports = validateAge;
