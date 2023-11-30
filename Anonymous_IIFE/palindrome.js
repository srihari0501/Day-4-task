// //Return all the palindromes in an array
// //Anonymous

var pal=function(a){
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
}

pal([ "bike","radar","mom","121"]);


// //Return all the palindromes in an array
(function(a){
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
  })
  
  ([ "car","radar","mom","code"]);


