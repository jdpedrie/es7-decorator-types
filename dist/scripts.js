(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _typeCheckerJs = require("./type-checker.js");

var _typeCheckerJs2 = _interopRequireDefault(_typeCheckerJs);

var _typesJs = require("./types.js");

var _typesJs2 = _interopRequireDefault(_typesJs);

var Person = (function () {
  function Person() {
    _classCallCheck(this, Person);

    this.data = {};
  }

  _createDecoratedClass(Person, [{
    key: "firstName",
    decorators: [(0, _typeCheckerJs2["default"])(_typesJs2["default"].string)],
    value: function firstName(name) {
      this.data.firstName = name;
    }
  }, {
    key: "lastName",
    decorators: [(0, _typeCheckerJs2["default"])(_typesJs2["default"].string)],
    value: function lastName(name) {
      this.data.lastName = name;
    }
  }, {
    key: "siblings",
    decorators: [(0, _typeCheckerJs2["default"])(_typesJs2["default"].array)],
    value: function siblings(_siblings) {
      this.data.siblings = _siblings;
    }
  }, {
    key: "phoneNumber",
    decorators: [(0, _typeCheckerJs2["default"])(_typesJs2["default"].number, _typesJs2["default"].number, _typesJs2["default"].number)],
    value: function phoneNumber(areaCode, firstThree, lastFour) {
      this.data.phoneNumber = {
        areaCode: areaCode,
        firstThree: firstThree,
        lastFour: lastFour
      };
    }
  }]);

  return Person;
})();

var john = new Person();
john.firstName("John");
john.lastName("Pedrie");
john.siblings(["Katie", "Margaret", "Rebekah", "James"]);
john.phoneNumber(555, 555, 1234);

console.log(john.data);

},{"./type-checker.js":2,"./types.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Strict;

function Strict() {
  var types = arguments;

  function validateTypes(target, key, descriptor) {
    var func = descriptor.value;
    var signatureParams = getParamNames(func);

    descriptor.value = function () {
      var givenValues = Array.prototype.slice.call(arguments);
      var err = [];
      var check = signatureParams.every(function (arg, index) {
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
    };
  };

  return validateTypes;
}

;

var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var ARGUMENT_NAMES = /([^\s,]+)/g;

function getParamNames(func) {
  var fnStr = func.toString().replace(STRIP_COMMENTS, '');
  var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
  if (result === null) {
    result = [];
  }

  return result;
};
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  string: function string(val) {
    return typeof val === 'string';
  },

  array: function array(val) {
    return Array.isArray(val);
  },

  number: function number(val) {
    return typeof val === 'number';
  },

  object: function object(val) {
    return typeof val === 'object';
  },

  any: function any(val) {
    return true;
  }
};
module.exports = exports['default'];

},{}]},{},[1])

