import Board from './board';
import Knight from './knight';

const board = Board();
const knight = Knight(board);

// Examples
knight.knightMoves([3, 3], [4, 3]);
knight.knightMoves([7, 7], [1, 2]);
