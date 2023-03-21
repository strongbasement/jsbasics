//let get tricky 

//guess the output

console.log("hi"||null);

//guess the output

console.log("hi"&&null);

/*output for or operator 
if one value is defined and other value is null 
it will return defined value*/

/*output for AND  operator 
it just opposite of or operator ,ie :it will return null if either one of the value is efined as null */

//incase both value are defined
console.log("hi"||"bye");//or will console value pn left side ie:hi

console.log("hi"&&"bye");//And will console value in right side ie:bye

//this is called as shortciruit logic