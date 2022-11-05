import Board from './board';
import Knight from './knight';

const board = Board();
const knight = Knight(board);

knight.knightMoves([0, 0], [3, 7]);
knight.knightMoves([1, 3], [4, 5]);
