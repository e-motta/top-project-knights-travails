import Square from './square';

const Board = () => {
  const createBoard = () => {
    const squares = [];
    for (let i = 0; i < 8; i += 1) {
      for (let j = 0; j < 8; j += 1) {
        squares.push(Square(i, j));
      }
    }
    return squares;
  };

  const squares = createBoard();

  const findSquareByCoord = (coord) => squares.find(
    (n) => JSON.stringify(n.coord) === JSON.stringify(coord),
  );

  return { squares, findSquareByCoord };
};

export default Board;
