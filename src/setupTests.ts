import '@testing-library/jest-dom';

global.matchMedia = global.matchMedia || function() {
  return {
      matches : false,
      addListener : function() {},
      removeListener: function() {}
  }
}
