const Square = (i, j) => {
  const coord = [i, j];
  const leaves = [
    i - 1 >= 0 && j - 2 >= 0 ? [i - 1, j - 2] : null,
    i - 2 >= 0 && j - 1 >= 0 ? [i - 2, j - 1] : null,
    i - 1 >= 0 && j + 2 <= 7 ? [i - 1, j + 2] : null,
    i + 2 <= 7 && j - 1 >= 0 ? [i + 2, j - 1] : null,
    i - 2 >= 0 && j + 1 <= 7 ? [i - 2, j + 1] : null,
    i + 1 <= 7 && j - 2 >= 0 ? [i + 1, j - 2] : null,
    i + 2 <= 7 && j + 1 <= 7 ? [i + 2, j + 1] : null,
    i + 1 <= 7 && j + 2 <= 7 ? [i + 1, j + 2] : null,
  ].filter((n) => n);

  return { coord, leaves };
};

export default Square;
