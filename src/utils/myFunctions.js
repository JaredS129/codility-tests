module.exports = {
  cyclicRotation: (A, K) => {
    if (!Array.isArray(A)) {
      return "Please provide a valid array";
    }
    if (A.length === 0) {
      return [];
    }
    if (K > 100 || K < 0) {
      return "Please rotate between 0 and 100";
    }
    if (K === 0) {
      return A;
    }
    let newArray;
    for (let i = 1; i <= K; i++) {
      const lastItem = A[A.length - 1];
      A.pop();
      A.unshift(lastItem);
      if (K === i) {
        newArray = A;
      }
    }
    return newArray;
  },
  oddOccurancesInArray: (A) => {
    if (A.length < 1) {
      return "please provide an array with at least one element";
    }
    if (A.length > 1000000) {
      return "please provide an array with less than 1000000 elements";
    }
    if (!Array.isArray(A)) {
      return "please provide an array input";
    }

    let sortedArray = A.sort(function (a, b) {
      return a - b;
    });

    let result;

    for (let i = 0; i < sortedArray.length; i = i + 2) {
      if (sortedArray[i] - sortedArray[i + 1] !== 0) {
        result = sortedArray[i];
        break;
      }
    }

    return result;
  },
  frogJump: (X, Y, D) => {
    const jumps = (Y - X) / D;
    return Math.ceil(jumps);
  },
  permMissingElem: (A) => {
    if (A.length === 0) {
      return 1;
    }
    const arraySum = A.reduce((total, num) => {
      return total + num;
    });
    const sumWithNoneMissing = ((A.length + 1) * (A.length + 2)) / 2;
    const result = sumWithNoneMissing - arraySum;

    return result;
  },
};
