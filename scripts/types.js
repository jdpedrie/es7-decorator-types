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

  any: function(val) {
    return true;
  }
};