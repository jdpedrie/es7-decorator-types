export default {
  string: function(val) {
    return (typeof val === 'string');
  },

  array: function(val) {
    return (Array.isArray(val));
  },

  number: function(val) {
    return (typeof val === 'number');
  },

  object: function(val) {
    return (typeof val === 'object');
  },

  class: function(className) {
    return function(val) {
      if (val.constructor !== null) {
        return (val.constructor.name === className);
      }

      return false;
    };
  },

  any: function(val) {
    return true;
  }
};