//NaN 

let num1=15;
let num2=25;
console.log("num1/num2 equal: " + (num1/num2));//0

num2="hello";
console.log("num1/num2 equal: " + (num1/num2));//NaN

num1=0;
num2=0;
console.log("num1/num2 equal: " + (num1/num2));//NaN

num1=Infinity;
num2=Infinity;
console.log("num1/num2 equal: " + (num1/num2));//Infinity

num1=Infinity;
num2=4;
console.log("num1/num2 equal: " + (num1/num2));//NaN
console.log("num2/num1 equal: " + (num2/num1))//NaN

num1=0;
num2=1;

console.log("num1/num2 equal: " + (num1/num2));//NaN
console.log("num2/num1 equal: " + (num2/num1));//NaN




