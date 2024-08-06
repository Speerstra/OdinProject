// Iterative
const fibonacciIterative = function (n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let result = [0, 1];

  while (result.length < n) {
    const next = result[result.length - 1] + result[result.length - 2];
    result.push(next);
  }

  return result;
};

console.log(`ITERATIVE: ${fibonacciRecursive1(20)}`);

// Recursive (base condition is beginning)
function fibonacciRecursive1(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const result = fibonacciRecursive1(n - 1);
  const next = result[result.length - 1] + result[result.length - 2];
  result.push(next);
  return result;
}

console.log(`RECURSIVE, BOTTOM UP: ${fibonacciRecursive1(20)}`);

// Recursive (base condition is endpoint)
const fibonacciRecursive2 = function (n, result = [0, 1]) {
  if (result.length >= n) return result;
  const next = result[result.length - 1] + result[result.length - 2];
  result.push(next);
  return fibonacciRecursive2(n, result);
};

console.log(`RECURSIVE, TOP DOWN: ${fibonacciRecursive1(20)}`);
