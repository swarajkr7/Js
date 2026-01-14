//mult or div have same predecedence and are evaluated left to right
let result1= 10+5*2;
console.log(result1); //20
//add or sub have same precedence and are evaluated left to right
let result2= 10-5+2;
console.log(result2); //7
//mult/div have higher precedence than add/sub
let result3= 10+5*2-8/4;
console.log(result3); //19
//parentheses have highest precedence
let result4= (10+5)*(2-8)/4;
console.log(result4); //-22.5
//exponents have higher precedence than mult/div   
let result5= 2+3**2*4;
console.log(result5); //38
//exponents are evaluated right to left
let result6= 2**3**2;
console.log(result6); //512    