function sum() {

  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    if (!isNaN(arguments[i])){
      if (!(typeof arguments[i] === 'string' || typeof arguments[i] === 'boolean')){
        sum = sum + arguments[i];
      }
    }
  }
  return sum;
}


console.log(sum (null, false, "4", undefined, true, 99, 6));