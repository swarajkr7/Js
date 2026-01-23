//first
let soup=10;
let burger=8;
let icecream=5;

console.log(soup+burger*3+icecream);
console.log(soup+burger*3+icecream-3);


//second
console.log((soup+burger*3+icecream)/3);

function averagePrice(soup, burger, icecream){
    return (soup+burger*3+icecream)/3;
    
}
const average=averagePrice(10,8,5);
console.log(average);
