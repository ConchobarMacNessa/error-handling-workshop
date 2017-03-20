// @TODO: Build validateEmail
// String (valid email address)
const validateEmail = (email, cb) => {
  if (typeof email !=='string'){
    cb(new TypeError('Email should be a string'))
  }
  else if (/^(([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+)?$
/gi.test(email))
  {
      cb(new Error('String does not match valid email'));
  }
  else{
    cb(email);
  }

  }


module.exports = validateEmail;
