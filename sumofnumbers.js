const test = [1,2,3,4,5,6,7,8,9,10];

function sumFor(arr) {
  let sum = 0;
  for (const num of arr) {
    sum+=num;
  }
  return sum;
}

function sumWhile(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum+=arr[i];
    i++;
  }
  return sum;
}

function sumRecursion(arr) {
  if (arr.length == 0) {
    return 0;
  }
  return arr[0] + sumRecursion(arr.slice(1, arr.length));
}

function sumTheSimpleWay(arr) {
  return _.reduce(arr, function (n,m) { return n + m;}, 0);
}

console.log(sumFor(test));
console.log(sumWhile(test));
console.log(sumRecursion(test));
console.log(sumTheSimpleWay(test));