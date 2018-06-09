var fizzBuzz = n =>
  [...Array(n)].reduce((acum, value, index) => {
    const currentNum = index + 1;
    let num = currentNum;
    if (currentNum % 5 == 0) num = currentNum % 3 == 0 ? "FizzBuzz" : "Buzz";
    if (num !== "FizzBuzz" && num !== "Buzz" && currentNum % 3 == 0)
      num = "Fizz";
    acum.push(num.toString());
    return acum;
  }, []);

const result = fizzBuzz(15);
var start = performance.now();
const result = fizzBuzz(15);

var duration = performance.now() - start;

console.log(duration, result);
