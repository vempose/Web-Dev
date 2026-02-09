let a = 1, b = 1;

alert( ++a ); // 2
alert( b++ ); // 1

alert( a ); // 2
alert( b ); // 2


let c = 2;
let x = 1 + (c *= 2);
// c = 4, x = 5


"" + 1 + 0 //= "10"
"" - 1 + 0 //= -1
true + false //= 1
6 / "3" //= 2
"2" * "3" //= 6
4 + 5 + "px" //= "9px"
"$" + 4 + 5 //= "$45"
"4" - 2 //= 2
"4px" - 2 //= NaN
"  -9  " + 5 //= "  -9  5"
"  -9  " - 5 //= -14
null + 1 //= 1 // (5)
undefined + 1 //= NaN
" \t \n" - 2 //= -2


let o = +prompt("First number?", 1);
let p = +prompt("Second number?", 2);

alert(o + p); // 3