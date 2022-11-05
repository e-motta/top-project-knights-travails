import Board from './board';
import Knight from './knight';

const board = Board();
const knight = Knight(board);

// Examples
knight.knightMoves([0, 0], [0, 0]);
knight.knightMoves([7, 7], [1, 2]);
