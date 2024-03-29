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
  tapeEquilibrium: (A) => {
    if (!Array.isArray(A)) {
      return "Please input an array";
    }

    let leftNum = 0;
    let rightNum = A.reduce((a, b) => a + b);
    let answer = null;
    for (let i = 0; i < A.length - 1; i++) {
      leftNum += A[i];
      rightNum -= A[i];
      const diff = Math.abs(leftNum - rightNum);
      if (answer === null || answer > diff) {
        answer = diff;
      }
    }
    return answer;
  },
  frogRiverOne: (X, A) => {
    let sum = (X * (X + 1)) / 2;
    const hash = {};

    for (let i = 0; i < A.length; i++) {
      const element = A[i];

      if (hash[element]) continue;
      else {
        hash[element] = true;
        sum -= element;

        if (sum === 0) return i;
      }
    }

    return -1;
  },
  permCheck: (A) => {
    const sum = (A.length * (A.length + 1)) / 2;
    const highestNum = Math.max(...A);
    const expectedSum = (highestNum * (highestNum + 1)) / 2;

    if (sum !== expectedSum) {
      return 0;
    }

    const noDuplicates = [...new Set(A)];

    if (noDuplicates.length !== A.length) {
      return 0;
    }

    return 1;
  },
  maxCounters: (N, A) => {
    let counters = new Array(N).fill(0);

    let maxCounter = 0;

    let maxToSet = 0;

    for (let i = 0; i < A.length; i++) {
      let X = A[i] - 1;

      if (X === N) {
        maxToSet = maxCounter;
      } else if (0 <= X && X < N) {
        counters[X] = Math.max(counters[X] + 1, maxToSet + 1);
        maxCounter = Math.max(counters[X], maxCounter);
      }
    }
    counters = counters.map((val) => Math.max(val, maxToSet));
    return counters;
  },
  sumOfProductPairs: (A) => {
    if (A.length <= 1) {
      return 0;
    }
    let newArray = [];

    for (let i = 1; i < A.length; i++) {
      A.slice(i).forEach((pair) => {
        newArray.push(A[i - 1] * pair);
      });
    }

    return newArray.reduce((partialSum, a) => partialSum + a, 0);
  },
  missingInteger: (A) => {
    let sortedArray = A.filter((value) => value > 0);
    if (sortedArray.length === 1 && A[0] === 1) {
      return 2;
    }
    if (sortedArray.length === 1 && A[0] !== 1) {
      return 1;
    }
    let value;
    sortedArray = sortedArray.sort(function (a, b) {
      return a - b;
    });
    sortedArray = [...new Set(sortedArray)];
    if (sortedArray.length !== 1 && sortedArray[0] !== 1) {
      return 1;
    }
    if (sortedArray.length !== 1 && sortedArray[0] === 1) {
      let difference = 1;
      for (let i = 0; difference === 1; i++) {
        value = sortedArray[i] + 1;
        difference = sortedArray[i + 1] - sortedArray[i];
      }
    }
    return value;
  },
  nByNMatrix: (matrix) => {
    // const hasNegativeNumber = (row) => row.some((item) => item <= 0);

    // const hasNumberGreaterThanLength = (row, length) =>
    //   row.some((item) => item > length);

    // const hasUniqueIntegers = (row, length) => {
    //   const uniqueIntegersInRow = [...new Set(row)];
    //   return uniqueIntegersInRow.length === length;
    // };

    // const findDuplicateInColumns = (A, row, originalRowIndex) => {
    //   return row.some((integer, index) =>
    //     A.some(
    //       (otherRow, rowIndex) =>
    //         rowIndex !== originalRowIndex && otherRow[index] === integer
    //     )
    //   );
    // };

    // const rowSum = (row) =>
    //   row.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    // const isOutputValid = (A) => {
    //   let output = true;
    //   let previousRowSum = null;

    //   for (let [originalRowIndex, row] of A.entries()) {
    //     const uniqueIntegersInRow = [...new Set(row)];

    //     if (hasNegativeNumber(row)) {
    //       console.log("number found less than 0");
    //       output = false;
    //     }

    //     if (hasNumberGreaterThanLength(uniqueIntegersInRow, A.length)) {
    //       console.log("number found greater than array length");
    //       output = false;
    //     }

    //     if (!hasUniqueIntegers(row, A.length)) {
    //       console.log("row length not equal to array length");
    //       output = false;
    //     }

    //     if (findDuplicateInColumns(A, uniqueIntegersInRow, originalRowIndex)) {
    //       console.log(`duplicate number found`);
    //       output = false;
    //     }

    //     const sumOfRow = rowSum(uniqueIntegersInRow);

    //     if (previousRowSum !== null && previousRowSum !== sumOfRow) {
    //       output = false;
    //     }

    //     previousRowSum = sumOfRow;
    //   }

    //   return output;
    // };
    // return isOutputValid(A);

    const n = matrix.length;

    for (let i = 0; i < n; i++) {
      let rowSet = new Set();
      let colSet = new Set();

      for (let j = 0; j < n; j++) {
        if (
          matrix[i][j] < 1 ||
          matrix[i][j] > n ||
          matrix[j][i] < 1 ||
          matrix[j][i] > n
        ) {
          return false;
        }

        rowSet.add(matrix[i][j]);
        colSet.add(matrix[j][i]);
      }

      if (rowSet.size !== n || colSet.size !== n) {
        return false;
      }
    }

    return true;
  },
  baseballGame: (ops) => {
    try {
      let score = [];
      for (let i = 0; i < ops.length; i++) {
        if (!isNaN(Number(ops[i]))) {
          score.push(parseInt(ops[i]));
          console.log(score);
          continue;
        }
        switch (ops[i]) {
          case "D":
            score.push(score[score.length - 1] * 2);
            console.log(score);
            continue;
          case "+":
            score.push(score[score.length - 1] + score[score.length - 2]);
            console.log(score);
            continue;
          case "C":
            score.pop();
            console.log(score);
            continue;
          default:
            return "Invalid input";
        }
      }
      return score.reduce((a, b) => a + b);
    } catch (error) {
      return error;
    }
  },
  validParentheses: (s) => {
    // let stack = [];
    // let map = {
    //   ")": "(",
    //   "}": "{",
    //   "]": "[",
    // };

    // for (let char of s) {
    //   if (map[char]) {
    //     let topElement = stack.length === 0 ? "#" : stack.pop();
    //     if (map[char] !== topElement) {
    //       return "invalid";
    //     }
    //   } else {
    //     stack.push(char);
    //   }
    // }

    // return stack.length === 0 ? "valid" : "invalid";

    let workingString = s;
    do {
      let initialLength = workingString.length;
      workingString = workingString.replace("()", "");
      workingString = workingString.replace("{}", "");
      workingString = workingString.replace("[]", "");
      if (initialLength === workingString.length) {
        return "invalid";
      }
    } while (workingString.length > 0);
    return "valid";
  },
};
