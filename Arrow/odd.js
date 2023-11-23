//Print odd numbers in an array
//Arrow


var arr = (a) => {
    for(var i=0;i<a.length;i++)
    {
        if(a[i]%2 !=0)
        {
            console.log(a[i]);
        }
    }
};
arr([4,5,6,7,8,9]);