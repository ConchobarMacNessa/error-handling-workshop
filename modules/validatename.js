// @TODO: Build validateName
// String (characters allowed: letter, dash, apostrophe. Must contain at least two letters)
const validateName = (name, cb) => {
    if (typeof name !== 'string'){
      cb(new TypeError('Name is not a string'));
    }
    else if (name.length<2){
      cb (new RangeError('Name is less than 2 characters length'))
    }
    else if (name.length>50){
      cb (new RangeError('Name is greater than 50 characters length'))
    }
    else if (/[^a-z'-]/gi.test(name)){
      cb (new Error('Name contains characters other than letter, dash, apostrophe'))
    }
    else {
      cb(null, name);
    }

}

module.exports = validateName;
