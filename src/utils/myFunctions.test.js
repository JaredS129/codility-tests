const functionRepository = require("./myFunctions");

const {
  cyclicRotation,
  oddOccurancesInArray,
  frogJump,
  permMissingElem,
  tapeEquilibrium,
  frogRiverOne,
  permCheck,
  maxCounters,
  sumOfProductPairs,
  missingInteger,
  nByNMatrix,
  baseballGame,
  validParentheses,
} = functionRepository;

// describe("cyclicRotation", () => {
//   it("should output an array cycled right 3 times", () => {
//     const initialArray = [3, 8, 9, 7, 6];
//     const cycleAmount = 3;
//     expect(cyclicRotation(initialArray, cycleAmount)).toEqual([9, 7, 6, 3, 8]);
//   });
//   it("should output an array cycled right 4 times", () => {
//     const initialArray = [1, 2, 3, 4];
//     const cycleAmount = 4;
//     expect(cyclicRotation(initialArray, cycleAmount)).toEqual([1, 2, 3, 4]);
//   });
//   it("should return an error if an array is not given", () => {
//     const initialArray = "not an array";
//     const cycleAmount = 4;
//     const result = "Please provide a valid array";
//     expect(cyclicRotation(initialArray, cycleAmount)).toEqual(result);
//   });
//   it("should return an error if the cycle amount is greater than 100", () => {
//     const initialArray = [1, 2, 3, 4];
//     const cycleAmount = 101;
//     const result = "Please rotate between 0 and 100";
//     expect(cyclicRotation(initialArray, cycleAmount)).toEqual(result);
//   });
//   it("should return an error if the cycle amount is less than 0", () => {
//     const initialArray = [1, 2, 3, 4];
//     const cycleAmount = -1;
//     const result = "Please rotate between 0 and 100";
//     expect(cyclicRotation(initialArray, cycleAmount)).toEqual(result);
//   });
//   it("should return the same array if the array is one item", () => {
//     const initialArray = [1000];
//     const cycleAmount = 15;
//     const result = [1000];
//     expect(cyclicRotation(initialArray, cycleAmount)).toEqual(result);
//   });
//   it("should return an empty array if the array given is empty", () => {
//     const initialArray = [];
//     const cycleAmount = 15;
//     const result = [];
//     expect(cyclicRotation(initialArray, cycleAmount)).toEqual(result);
//   });
//   it("should not return an error", () => {
//     const initialArray = [-4];
//     const cycleAmount = 0;
//     const result = [-4];
//     expect(cyclicRotation(initialArray, cycleAmount)).toEqual(result);
//   });
// });

// describe("oddOccurancesInArray", () => {
//   it("should return 7", () => {
//     const inputArray = [9, 3, 9, 3, 9, 7, 9];
//     const result = 7;
//     expect(oddOccurancesInArray(inputArray)).toEqual(result);
//   });
//   it("should return 1", () => {
//     const inputArray = [9, 7, 9, 7, 1];
//     const result = 1;
//     expect(oddOccurancesInArray(inputArray)).toEqual(result);
//   });
//   it("should return an error if the array length is less that 1", () => {
//     const inputArray = [];
//     const result = "please provide an array with at least one element";
//     expect(oddOccurancesInArray(inputArray)).toEqual(result);
//   });
//   it("should return an error if the array length is more that 1000000", () => {
//     let inputArray = [];
//     for (let i = 1; i <= 1000001; i++) {
//       inputArray.push(1);
//     }
//     const result = "please provide an array with less than 1000000 elements";
//     expect(oddOccurancesInArray(inputArray)).toEqual(result);
//   });
//   it("should return an error if the input is not an array", () => {
//     const inputArray = "not an array";
//     const result = "please provide an array input";
//     expect(oddOccurancesInArray(inputArray)).toEqual(result);
//   });
// });

// describe("frogJump", () => {
//   it("should return 3", () => {
//     expect(frogJump(10, 85, 30)).toEqual(3);
//   });
//   it("should return 1", () => {
//     expect(frogJump(10, 85, 90)).toEqual(1);
//   });
//   it("should return 1 if Y is the frog lands on D", () => {
//     expect(frogJump(10, 85, 75)).toEqual(1);
//   });
//   it("should return 2 if the frog lands 1 short of D", () => {
//     expect(frogJump(10, 85, 74)).toEqual(2);
//   });
//   it("should return 100 if Y the frog only jumps 1 at a time", () => {
//     expect(frogJump(10, 110, 1)).toEqual(100);
//   });
//   it("should return 1 if the frog starts close to Y", () => {
//     expect(frogJump(109, 110, 1)).toEqual(1);
//   });
// });

// describe("permMissingElem", () => {
//   it("should return 4", () => {
//     const myArray = [2, 3, 1, 5];
//     expect(permMissingElem(myArray)).toEqual(4);
//   });
//   it("should return 3", () => {
//     const myArray = [2, 4, 1, 5, 6, 8, 7, 10, 9];
//     expect(permMissingElem(myArray)).toEqual(3);
//   });
//   it("if an empty array is given, return 1", () => {
//     const myArray = [];
//     expect(permMissingElem(myArray)).toEqual(1);
//   });
//   it("should return the other number if an array of length 1 is given", () => {
//     let myArray = [1];
//     expect(permMissingElem(myArray)).toEqual(2);
//     myArray = [2];
//     expect(permMissingElem(myArray)).toEqual(1);
//   });
// });

// describe("tapeEquilibrium", () => {
//   it("should output 1", () => {
//     const myArray = [3, 1, 2, 4, 3];
//     expect(tapeEquilibrium(myArray)).toEqual(1);
//   });
// });

// describe("frogRiverOne", () => {
//   it("should output 6", () => {
//     const myArray = [1, 3, 1, 4, 2, 3, 5, 4];
//     expect(frogRiverOne(5, myArray)).toEqual(6);
//   });
//   it("should output 6 v2", () => {
//     const myArray = [1, 3, 1, 2, 3, 5, 4, 5];
//     expect(frogRiverOne(5, myArray)).toEqual(6);
//   });
//   it("should output 3", () => {
//     const myArray = [1, 3, 1, 2, 3, 5, 4, 5];
//     expect(frogRiverOne(3, myArray)).toEqual(3);
//   });
//   it("should output 0", () => {
//     const myArray = [1, 3, 1, 2, 3, 5, 4, 5];
//     expect(frogRiverOne(1, myArray)).toEqual(0);
//   });
//   it("should output -1", () => {
//     const myArray = [2, 3, 2, 3, 5, 4, 5];
//     expect(frogRiverOne(1, myArray)).toEqual(-1);
//   });
//   it("should output -1 too", () => {
//     const myArray = [1, 3, 1, 3, 5, 5, 1];
//     expect(frogRiverOne(5, myArray)).toEqual(-1);
//   });
//   it("should output -1 v2", () => {
//     expect(frogRiverOne(2, [1, 1, 1, 1])).toEqual(-1);
//   });
// });

// describe("permCheck", () => {
//   it("should return 1", () => {
//     const myArray = [4, 1, 3, 2];
//     expect(permCheck(myArray)).toEqual(1);
//   });
//   it("should return 0", () => {
//     const myArray = [4, 1, 3];
//     expect(permCheck(myArray)).toEqual(0);
//   });
// });

// describe("maxCounters", () => {
//   it("should return the final outcome of the counters accurately", () => {
//     const A = [3, 4, 4, 6, 1, 4, 4];
//     const N = 5;
//     const result = [3, 2, 2, 4, 2];
//     expect(maxCounters(N, A)).toEqual(result);
//   });
// });

// describe("sumOfProductPairs", () => {
//   it("should output 11", () => {
//     const inputArray = [1, 2, 3];
//     const result = 11;
//     expect(sumOfProductPairs(inputArray)).toEqual(result);
//   });
//   it("should output 140", () => {
//     const inputArray = [2, 4, 6, 8];
//     const result = 140;
//     expect(sumOfProductPairs(inputArray)).toEqual(result);
//   });
//   it("should output 0 if given an empty array", () => {
//     const inputArray = [];
//     const result = 0;
//     expect(sumOfProductPairs(inputArray)).toEqual(result);
//   });
//   it("should output 0 if given an array with one value", () => {
//     const inputArray = [5];
//     const result = 0;
//     expect(sumOfProductPairs(inputArray)).toEqual(result);
//   });
// });

// describe("missingInteger", () => {
//   it("should return 5", () => {
//     const A = [1, 3, 6, 4, 1, 2];
//     const result = 5;
//     expect(missingInteger(A)).toEqual(result);
//   });
//   it("should return 1", () => {
//     const A = [2];
//     const result = 1;
//     expect(missingInteger(A)).toEqual(result);
//   });
//   it("should return 2", () => {
//     const A = [1];
//     const result = 2;
//     expect(missingInteger(A)).toEqual(result);
//   });
//   it("should return 3", () => {
//     const A = [4, 1, 5, 6, 2];
//     const result = 3;
//     expect(missingInteger(A)).toEqual(result);
//   });
//   it("should return 101", () => {
//     let A = [];
//     for (let i = 0; i <= 100; i++) {
//       A.push(i);
//     }
//     for (let i = 102; i <= 200; i++) {
//       A.push(i);
//     }
//     const result = 101;
//     expect(missingInteger(A)).toEqual(result);
//   });
//   it("should return 1 if given extremes", () => {
//     let A = [-1000000, 1000000];
//     const result = 1;
//     expect(missingInteger(A)).toEqual(result);
//   });
// });

// describe("nByNMatrix", () => {
//   it("a 3x3 input should output true when given a valid input v1", () => {
//     let inputMatrix = [
//       [1, 2, 3],
//       [3, 1, 2],
//       [2, 3, 1],
//     ];
//     expect(nByNMatrix(inputMatrix)).toEqual(true);
//   });
//   it("a 3x3 input should output false when given an invalid input v2", () => {
//     let inputMatrix = [
//       [1, 2, 3],
//       [3, 1, 4],
//       [2, 3, 1],
//     ];
//     expect(nByNMatrix(inputMatrix)).toEqual(false);
//   });
//   it("a 3x3 input should output false when given an invalid input", () => {
//     let inputMatrix = [
//       [2, 3, 1],
//       [2, 1, 3],
//       [3, 2, 2],
//     ];
//     expect(nByNMatrix(inputMatrix)).toEqual(false);
//   });
//   it("a 3x3 input should output false when given an invalid input v2", () => {
//     let inputMatrix = [
//       [2, 2, 2],
//       [2, 3, 3],
//       [3, 1, 1],
//     ];
//     expect(nByNMatrix(inputMatrix)).toEqual(false);
//   });
//   it("a 4x4 input should output true when given a valid input", () => {
//     let inputMatrix = [
//       [2, 1, 3, 4],
//       [4, 3, 1, 2],
//       [1, 2, 4, 3],
//       [3, 4, 2, 1],
//     ];
//     expect(nByNMatrix(inputMatrix)).toEqual(true);
//   });
//   it("a 4x4 input should output false when given an ivalid input", () => {
//     let inputMatrix = [
//       [2, 1, 1, 4],
//       [4, 3, 3, 2],
//       [1, 2, 4, 3],
//       [3, 4, 2, 1],
//     ];
//     expect(nByNMatrix(inputMatrix)).toEqual(false);
//   });
//   it("should output false when missing a row", () => {
//     let inputMatrix = [
//       [1, 2, 3, 4],
//       [3, 1, 2, 4],
//       [4, 3, 1, 2],
//     ];
//     expect(nByNMatrix(inputMatrix)).toEqual(false);
//   });
//   it("should output false when one of the rows isn't equal to n", () => {
//     let inputMatrix = [
//       [1, 2, 3, 4],
//       [3, 1, 2],
//       [4, 3, 1, 2],
//       [4, 1, 2, 3],
//     ];
//     expect(nByNMatrix(inputMatrix)).toEqual(false);
//   });
//   it("should output false when the input isn't nXn v2", () => {
//     let inputMatrix = [
//       [1, 2, 3],
//       [2, 1],
//       [4, 3, 1],
//     ];
//     expect(nByNMatrix(inputMatrix)).toEqual(false);
//   });
//   it("5x5 input should output true when given a valid input", () => {
//     let inputMatrix = [
//       [1, 2, 3, 4, 5],
//       [2, 3, 5, 1, 4],
//       [3, 4, 2, 5, 1],
//       [5, 1, 4, 2, 3],
//       [4, 5, 1, 3, 2],
//     ];
//     expect(nByNMatrix(inputMatrix)).toEqual(true);
//   });
//   it("5x5 input should output false when given an ivalid input", () => {
//     let inputMatrix = [
//       [1, 2, 3, 4, 5],
//       [2, 3, 2, 1, 4],
//       [3, 4, 5, 5, 1],
//       [5, 1, 4, 2, 3],
//       [4, 5, 1, 3, 2],
//     ];
//     expect(nByNMatrix(inputMatrix)).toEqual(false);
//   });
//   it("5x5 input should output false when integers in columns aren't unique", () => {
//     let inputMatrix = [
//       [1, 2, 3, 4, 5],
//       [1, 2, 3, 4, 5],
//       [1, 2, 3, 4, 5],
//       [1, 2, 3, 4, 5],
//       [1, 2, 3, 4, 5],
//     ];
//     expect(nByNMatrix(inputMatrix)).toEqual(false);
//   });

// describe("baseballGame", () => {
//   it('["5", "2", "C", "D", "+"] should output 30', () => {
//     let ops = ["5", "2", "C", "D", "+"];
//     expect(baseballGame(ops)).toEqual(30);
//   });
//   it('["5", "-2", "4", "C", "D", "9", "+", "+"] should output 27', () => {
//     let ops = ["5", "-2", "4", "C", "D", "9", "+", "+"];
//     expect(baseballGame(ops)).toEqual(27);
//   });
// });

describe("valid parentheses", () => {
  it("() should be valid", () => {
    let s = "()";
    expect(validParentheses(s)).toEqual("valid");
  });
  it("()[]{} should be valid", () => {
    let s = "()[]{}";
    expect(validParentheses(s)).toEqual("valid");
  });
  it("([)] should be invalid", () => {
    let s = "([)]";
    expect(validParentheses(s)).toEqual("invalid");
  });
  it("{[]} should be valid", () => {
    let s = "{[]}";
    expect(validParentheses(s)).toEqual("valid");
  });
  it("{()[]} should be valid", () => {
    let s = "{[]}";
    expect(validParentheses(s)).toEqual("valid");
  });
  it("{()([])} should be valid", () => {
    let s = "{()([])}";
    expect(validParentheses(s)).toEqual("valid");
  });
  it("{()([{]})} should be invalid", () => {
    let s = "{()([{]})}";
    expect(validParentheses(s)).toEqual("invalid");
  });
});
