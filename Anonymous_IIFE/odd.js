// Print odd numbers in an array
//Anonymous


var num = function(a){
 
for(var i=0;i<a.length;i++)
{
    if(a[i]%2 !=0)
    {
        console.log(a[i]);
    }
}

};

num([1,2,3,4,5,6,7,8,9]);


// IIFE


(function num(odd){
for(var i=0;i<odd.length;i++)
{
    if(odd[i]%2!=0)
    {
        console.log(odd[i]);
    }
}
})([1,2,3,4,5]);

