export default function Strict() {
  let types = arguments;

  function validateTypes(target, key, descriptor) {
    let func = descriptor.value;
    let signatureParams = getParamNames(func);

    descriptor.value = function() {
      let givenValues = Array.prototype.slice.call(arguments);
      let err = [];
      let check = signatureParams.every(function(arg, index) {
        if (!types[index](givenValues[index])) {
          err.push({
            index: index,
            param: arg,
            arg: givenValues[index],
            expected: types[index]
          });

          return false;
        }

        return true;
      });

      if (!check) {
        throw new Error('Invalid Arguments! ' + JSON.stringify(err));
      }

      return func.apply(this, givenValues);
    }
  };

  return validateTypes
};

const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
const ARGUMENT_NAMES = /([^\s,]+)/g;

function getParamNames(func) {
  let fnStr = func.toString().replace(STRIP_COMMENTS, '');
  let result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
  if(result === null) {
    result = [];
  }

  return result;
};