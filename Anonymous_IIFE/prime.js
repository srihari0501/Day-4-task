//Return all the prime numbers in an array
//Anonymous

var num =function(a){
 for(var i=0;i<=a.length;i++)
 {
    var count=0;
 for(var j=2;j<=a[i];j++)
 {

 
    if(a[i]%j==0)
    {
        count++;
    }
 }
    if(count==1)
    {
        console.log(a[i]);
    }  
    
 }
       
};
num([1,2,3,4,5,6,7,8,9]);


//Return all the prime numbers in an array
//IIFE

(function(a){
    for(var i=0;i<=a.length;i++)
    {
       var count=0;
    for(var j=2;j<=a[i];j++)
    {
   
    
       if(a[i]%j==0)
       {
           count++;
       }
    }
       if(count==1)
       {
           console.log(a[i]);
       }  
       
    }
          
   })
   ([1,2,3,4,5,6,7,8,9]);