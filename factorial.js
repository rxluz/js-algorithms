function factorial(num, currentVal) {
  if (num === 1) {
    return currentVal;
  }

  return factorial(num - 1, (currentVal || num) * --num);
}

const fact = num => (num === 1 ? num : num * fact(num - 1));

console.log(fact(4));
