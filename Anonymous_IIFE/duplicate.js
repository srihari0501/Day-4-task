// Remove duplicates from an array

var array=function(arr)
{
    let A = [];
    for(let i of arr) 
    {
        if(A.indexOf(i) === -1)
        {
            A.push(i);
        }
    }
    console.log(A);
};
array([1,1,4,6,4,"hello","hello","world"]);


//IIFE
// Remove duplicates from an array

(function(arr)
{
    let A = [];
    for(let i of arr) 
    {
        if(A.indexOf(i) === -1)
        {
            A.push(i);
        }
    }
    console.log(A);
})
([1,1,4,6,4,"hello","hello","world"]);

