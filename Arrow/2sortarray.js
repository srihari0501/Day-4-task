//Return the median of two sorted arrays of the same size
var Median = function(arr1, arr2){
    var sortedArr = [...arr1, ...arr2].sort((a, b) => a - b);
    var mid = Math.floor(sortedArr.length / 2);
  
    return sortedArr.length % 2 === 0
      ? (sortedArr[mid - 1] + sortedArr[mid]) / 2
      : sortedArr[mid];
  };
  var arr1 = [1, 3, 5];
  var arr2 = [2, 4, 6];
  
  var result=Median(arr1, arr2);
  console.log("Median:",+result);

//IIFE
var arr1 = [1, 3, 5];
  var arr2 = [2, 4, 6];
(function(arr1, arr2){
    var sortedArr = [...arr1, ...arr2].sort((a, b) => a - b);
    var mid = Math.floor(sortedArr.length / 2);
  
    return console.log(sortedArr.length % 2 === 0
      ? (sortedArr[mid - 1] + sortedArr[mid]) / 2
      : sortedArr[mid]);
  })
  
  (arr1, arr2);
  