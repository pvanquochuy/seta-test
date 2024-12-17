function mostFrequentStrLength(strings) {
  const lengthFrequency = {}; // Lưu tần suất xuất hiện của mỗi độ dài
  const result = [];

  for (const str of strings) {
    const length = str.length;
    lengthFrequency[length] = (lengthFrequency[length] || 0) + 1;
  }

  const maxFrequency = Math.max(...Object.values(lengthFrequency));

  const mostFrequentLengths = Object.keys(lengthFrequency).filter(
    (length) => lengthFrequency[length] === maxFrequency
  );

  for (const str of strings) {
    if (mostFrequentLengths.includes(String(str.length))) {
      result.push(str);
    }
  }

  return result;
}

// const result = mostFrequentStrLength(["a", "abb", "abc", "cd", "def", "gh"]);

// console.log(result);

const testCases = [
  {
    input: ["a", "ab", "abc", "cd", "def", "gh"],
    expected: ["ab", "cd", "gh"],
  },
  { input: ["hello", "world", "hi", "hey"], expected: ["hello", "world"] },
  { input: ["x", "yy", "zzz", "a", "bb", "ccc"], expected: ["yy", "bb"] },
  { input: [], expected: [] },
  { input: ["single"], expected: ["single"] },
];

for (const { input, expected } of testCases) {
  const result = mostFrequentStrLength(input);
  console.log(
    `Input: ${JSON.stringify(input)}\nOutput: ${JSON.stringify(
      result
    )}\nExpected: ${JSON.stringify(expected)}\n`
  );
}

function unitTest() {
  for (const { input, expected } of testCases) {
    const result = mostFrequentStrLength(input);
    if (JSON.stringify(result) !== JSON.stringify(expected)) {
      console.error(
        `Test failed!\nInput: ${JSON.stringify(
          input
        )}\nExpected: ${JSON.stringify(expected)}\nGet: ${JSON.stringify(
          result
        )}`
      );
      return;
    }
  }
  console.log("All tests passed!");
}

// Chạy unit test
unitTest();
