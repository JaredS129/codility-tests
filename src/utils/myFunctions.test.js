const functionRepository = require("./myFunctions");

const { cyclicRotation } = functionRepository;

describe("myFunction", () => {
  it("should output an array cycled right 3 times", () => {
    const initialArray = [3, 8, 9, 7, 6];
    const cycleAmount = 3;
    expect(cyclicRotation(initialArray, cycleAmount)).toEqual([9, 7, 6, 3, 8]);
  });
  it("should output an array cycled right 4 times", () => {
    const initialArray = [1, 2, 3, 4];
    const cycleAmount = 4;
    expect(cyclicRotation(initialArray, cycleAmount)).toEqual([1, 2, 3, 4]);
  });
  it("should return an error if an array is not given", () => {
    const initialArray = "not an array";
    const cycleAmount = 4;
    const result = "Please provide a valid array";
    expect(cyclicRotation(initialArray, cycleAmount)).toEqual(result);
  });
  it("should return an error if the cycle amount is greater than 100", () => {
    const initialArray = [1, 2, 3, 4];
    const cycleAmount = 101;
    const result = "Please rotate between 0 and 100";
    expect(cyclicRotation(initialArray, cycleAmount)).toEqual(result);
  });
  it("should return an error if the cycle amount is less than 0", () => {
    const initialArray = [1, 2, 3, 4];
    const cycleAmount = -1;
    const result = "Please rotate between 0 and 100";
    expect(cyclicRotation(initialArray, cycleAmount)).toEqual(result);
  });
  it("should return the same array if the array is one item", () => {
    const initialArray = [1000];
    const cycleAmount = 15;
    const result = [1000];
    expect(cyclicRotation(initialArray, cycleAmount)).toEqual(result);
  });
  it("should return an empty array if the array given is empty", () => {
    const initialArray = [];
    const cycleAmount = 15;
    const result = [];
    expect(cyclicRotation(initialArray, cycleAmount)).toEqual(result);
  });
  it("should not return an error", () => {
    const initialArray = [-4];
    const cycleAmount = 0;
    const result = [-4];
    expect(cyclicRotation(initialArray, cycleAmount)).toEqual(result);
  });
});
