#### Table of contents
[special numbers](#special-numbers)
|[Strings](#strings-surrounded-by-single-or-double-quotes-or-back-tick-quotes)
|[escape sequence](#using-escape-sequence-inside-string)
|[booleans](#booleans-only-have-two-values)
|[Automatic type coversion](#automatic-type-conversion)
|[operators](#operators)
|[shor-circuit-logic](#short-circuit-logic)

### special numbers


#### Infinity , -infinity , Nan are  special number

``` js
console.log(0/0);
// ->NaN not a number
```


### strings surrounded by single or double quotes or back tick quotes

``` js
console.log("hi this is me");//doube quoted string

console.log('hi this is us');//single quoted string

console.log(`hi`);// back tick quoted string

```

### evaluate inside a back tick quoted string

``` js

console.log(`sum of 1+2 is ${1+2}`);

//->sum of 1+2 is 3

```


### using escape sequence inside string \

``` js
console.log(""hi"");//gives you an error


```
``` js
console.log("\"hi\"");//just add a backslash to escape from debugger

```
### booleans only have two values

``` js
//boolean has only two values true or false;
mylove=true;
myhate=false;
console.log(mylove||myhate);

```

### null and undefined are same which means variable has no value but they are not equal to zero

### Automatic type conversion

``` js
//js has so much of freedom it can give any kind of output with automatic type coversion

//example

console.log("3"-2); //incase of substraction , output will be 1 string is converted to number

//but in case of addition

console.log("3"+2);//output will be 32 ,here concatenation occurs because 2 is coverted to String in the case of addition

//another example
console.log(8*null);//output will be zero null is auto converted to zero

console.log(false==0)//->true

console.log(null==0)//->false

console.log(null==undefined);//guess the output

```

### operators

``` js
//arithmetic operators
console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2/3);//dq division quotient
console.log(2%3);//mr modulo gives remainder

//unary operator takes only one operand

console.log(typeof "hi");
console.log(typeof 3.8);

//binary operator takes two operands eg

console.log(-(-3-2));


//ternary or conditional operator

console.log(0<6?true:false) //0<6 is true execute center value ,ifit is false execute last value

//comparison operator

console.log(5>2);//greater than 
console.log(5<2);//lesser than
console.log(5==2);//equals to
console.log(5>=2);//greater tahn or equqls to
console.log(5<2);//lesser than or equals to

//logical operator

console.log(true||false)//or operator gives true if either one of the value is true

console.log(true&&true)//And operator gives true only if both values are true

console.log(2!=2);//if it is not equal give true


//using logical operator and comparasion operator together


console.log(5<2||5>2)//true
console.log(5<2&&5>2)//false

```
### short circuit logic

``` js
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
```