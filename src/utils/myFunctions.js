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
};
