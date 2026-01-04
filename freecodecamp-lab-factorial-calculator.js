const num = 5;

const factorialCalculator = (number) => {
    let result = 1;

    if(typeof number !== "number"){
      return "Invalid Number";
    }

    for(let i = 1; i <= number; i++){
       result *= i;
    }

    return result;
}

let factorial =  factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
