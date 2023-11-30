
//rotate an array by k times
var rotate = function(arr, k)
{
  var n = arr.length;
  k = k % n;
  var rotated = [...arr.slice(k), ...arr.slice(0, k)];
 
  return rotated;
};
var Array = [1, 2, 3];
var k =1;

rotated = rotate(Array, k);
console.log("Array:", Array);
console.log("Rotated Array:", rotated);


//IIFE

//rotate an array by k times
var a= [1, 2, 3];
var k =1;
(function(arr, k)
{
  var n = arr.length;
  k = k % n;
  var rotated = [...arr.slice(k), ...arr.slice(0, k)];
 
  console.log(rotated);
  

})
(a,k)

