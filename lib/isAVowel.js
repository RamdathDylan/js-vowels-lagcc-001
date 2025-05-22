'use strict';

var isAVowel = function(lttr){
  // your code goes here
  if(lttr === 'a' || lttr === 'e' || lttr === 'i' || lttr === 'o' || lttr === 'u'){
    return true;
  }
  return false;

};

module.exports = isAVowel;
