const functionRepository = require("./myFunctions");

const { cyclicRotation, oddOccurancesInArray, frogJump } = functionRepository;

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

describe("frogJump", () => {
  it("should return 3", () => {
    expect(frogJump(10, 85, 30)).toEqual(3);
  });
  it("should return 1", () => {
    expect(frogJump(10, 85, 90)).toEqual(1);
  });
  it("should return 1 if Y is the frog lands on D", () => {
    expect(frogJump(10, 85, 75)).toEqual(1);
  });
  it("should return 2 if the frog lands 1 short of D", () => {
    expect(frogJump(10, 85, 74)).toEqual(2);
  });
  it("should return 100 if Y the frog only jumps 1 at a time", () => {
    expect(frogJump(10, 110, 1)).toEqual(100);
  });
  it("should return 1 if the frog starts close to Y", () => {
    expect(frogJump(109, 110, 1)).toEqual(1);
  });
});
