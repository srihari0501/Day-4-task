// Sum of all numbers in an array
//Anonymous


var a =0;
var num=function(arr){
 for(var i=0;i<arr.length;i++)
 {
    a=a+arr[i];
 }
 return a;
};
console.log(num([1,2,3]));

// Sum of all numbers in an array
//IIFE
var sum=0;
(function num(a){
    for(var i=0;i<a.length;i++)
    {
        sum=sum+a[i];       
    }
    console.log(sum);
})
([2,4,6]);


