import Square from './square';
import Board from './board';
import Knight from './knight';

const root = {
  value: [0, 0],
  link: [],
};
root.link = {
  value: [1, 2],
  link: [root],
};

const board = Board();
const knight = Knight(board);
console.log(knight.getShortestPath([0, 0], [5, 5]));
