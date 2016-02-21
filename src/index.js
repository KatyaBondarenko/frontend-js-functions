function sum() {

  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    if (!isNaN(arguments[i])){
      if (!(typeof arguments[i] == 'string' || typeof arguments[i] == 'boolean')){
        sum = sum + arguments[i];
      }
    }
  }
  return sum;
}


console.log(sum (null, false, "4", undefined, true, 99, 6));




function min(array) {


  var min;
  var isMin = false;

  for (var i = 0; i < array.length; i++) {

    if (!isNaN(array[i])){
      if (!(typeof array[i] == 'string' || typeof array[i] == 'boolean' || typeof array[i] == 'object') ){
        if (!isMin){
          min = array[i];
          isMin = true;
        }
        else{
          if (array[i] < min)min = array[i];
        }
      }
    }
  }
  return min;
}

var arr = [null, false, "4", undefined, true, 99, 524];


console.log(min(arr));






function max(array) {


  var max;
  var isMax = false;

  for (var i = 0; i < array.length; i++) {

    if (!isNaN(array[i])){
      if (!(typeof array[i] == 'string' || typeof array[i] == 'boolean' || typeof array[i] == 'object') ){
        if (!isMax){
          max = array[i];
          isMax = true;
        }
        else{
          if (array[i] > max) {
            max = array[i];
          }
        }
      }
    }
  }
  return max;
}

var arr = [null, false, "4", undefined, true, 99, 524];


console.log(max(arr));