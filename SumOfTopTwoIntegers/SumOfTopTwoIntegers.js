function sumOfTopTwoIntegers(arr) {
  if (arr.length < 2) {
    return null;
  }
  arr.sort((a, b) => b - a);

  return arr[0] + arr[1];
}

console.log(sumOfTopTwoIntegers([5, 2, 5, 2]));

const testCases = [
  {
    input: [1, 4, 2, 3, 5],
    expected: 9,
  },
  {
    input: [10, 20, 30, 40],
    expected: 70,
  },
  {
    input: [7, 2, 1],
    expected: 9,
  },
  {
    input: [5],
    expected: null,
  },
  {
    input: [100, 200, 300, 50, 25],
    expected: 500,
  },
  {
    input: [-1, -2, -3, -4, -5],
    expected: -3,
  },
  {
    input: [1, 1, 1, 1],
    expected: 2,
  },
];

function unitTest() {
  for (const { input, expected } of testCases) {
    const result = sumOfTopTwoIntegers(input);
    if (result !== expected) {
      console.error(
        `Test failed!\nInput: ${JSON.stringify(
          input
        )}\nExpected: ${expected}\nGot: ${result}`
      );
      return;
    }
  }
  console.log("All tests passed!");
}

unitTest();
