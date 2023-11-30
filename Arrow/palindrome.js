//Return all the palindromes in an array
var pal=(a)=>{
    for(i=0;i<a.length;i++)
    {
      var b="";
      for(j=a[i].length-1;j>=0;j--)
     {
    
      b = a[i].split('').reverse().join('');
     } 
      if(b==a[i]){
        console.log(a[i]);
        b="";
      }
    }
    };
    
    pal([ "bike","radar","121"]);
