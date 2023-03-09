function example() {
  return 5;
}

test("Example - write the function above that returns the number 5", () => {
  expect(example()).toBe(5);
});

// Should return an array that contains the numbers 1 through X
function problemOne(arraySize) {}

test("Write a function that uses a loop to generate an array of increasing numbers", () => {
  expect(problemOne(1)).toEqual([1]);
  expect(problemOne(7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  expect(problemOne(0)).toEqual([]);
});

function problemTwo(inputArray, newArraySize) {}

test("Write a function that takes in an array and returns a new array contains the first X elements", () => {
  const sampleArray = [0, 1, 2, 3, 4, 5, 6];
  expect(problemTwo(sampleArray, 0)).toEqual([]);
  expect(problemTwo(sampleArray, 3)).toEqual([0, 1, 2]);
});

function problemThree(size) {}

test("Write a function that creates a 2D array of a given size. Each element should be a 0", () => {
  const resultArray = problemThree(3);
  expect(resultArray.length).toBe(3);
  expect(resultArray[0].length).toBe(3);
  expect(resultArray[1].length).toBe(3);
  expect(resultArray[2].length).toBe(3);
  expect(resultArray[0]).toEqual([0, 0, 0]);
});

function problemFour(inputArray) {}

test("Given a 2D array, write a function that will grab the bottom right element.", () => {
  const exampleArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const exampleArray2 = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
  ];
  expect(problemFour(exampleArray)).toBe(8);
  expect(problemFour(exampleArray2)).toBe(14);
});
