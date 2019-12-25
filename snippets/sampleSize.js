// Gets n random elements at unique keys from array up to the size of array.

// slice() to get the first n elements. Omit the second argument, n to get only one element at random from the array.

const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

// Exp.
  sampleSize([1, 2, 3], 4);
  // [2,3,1]
