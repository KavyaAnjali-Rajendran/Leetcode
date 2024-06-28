var createCounter = function(n) {
    
  return function() {
      let result = n;
      n++;
      return result;
      
  };
};