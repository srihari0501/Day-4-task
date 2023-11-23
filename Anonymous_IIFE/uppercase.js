// Convert all the strings to title caps in a string array

//Anonymous


var leaf =function(a){
    for(var i=0;i<a.length;i++)
    {
            console.log(a[i].toUpperCase())
    
    }
};

leaf(["naruto","jiraiya","guy"]);


// Convert all the strings to title caps in a string array
// IIFE

(function op(a){
    for(var i=0;i<a.length;i++)
    {
        console.log(a[i].toUpperCase());
    
}
})
(["zoro","luffy","sanji"]);
