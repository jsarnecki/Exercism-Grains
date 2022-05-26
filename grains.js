
export const square = (n) => {

  if (n < 1 || n > 64) {
    throw new Error('square must be between 1 and 64');
  }

  if (n > 51) {
    return BigInt(2 ** (n - 1));
  }

  return 2 ** (n - 1);

};

export const total = () => {
  return BigInt(2 ** 64) - 1n;
};
