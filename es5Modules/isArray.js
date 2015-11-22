define([], function() {
  "use strict";
  function isArray(input) {
    return Object.prototype.toString.call(input) === '[object Array]';
  }
  function isString(input) {
    return Object.prototype.toString.call(input) === '[object String]';
  }
  return {
    get isArray() {
      return isArray;
    },
    get isString() {
      return isString;
    },
    __esModule: true
  };
});
