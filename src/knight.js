/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const Knight = (board) => {
  const includesArr = (outArr, inArr) => {
    const outArrStr = outArr.map((el) => JSON.stringify(el));
    return outArrStr.includes(JSON.stringify(inArr));
  };

  const createParentRelations = (originCoord, targetCoord, queue = []) => {
    const originSquare = board.findSquareByCoord(originCoord);

    if (includesArr(originSquare.leaves, targetCoord)) {
      const targetSquare = board.findSquareByCoord(targetCoord);
      targetSquare.parent = originSquare;
      queue.length = 0;
      return null;
    }

    originSquare.leaves.forEach((coord) => {
      const square = board.findSquareByCoord(coord);
      if (square.parent === null) square.parent = originSquare;
      queue.push(coord);
    });

    if (queue.length > 0) {
      return createParentRelations(queue.shift(), targetCoord, queue);
    }

    return null;
  };

  const clearParentRelations = () => {
    board.squares.forEach((square) => {
      square.parent = null;
    });
  };

  const traverseParentRelations = (originCoord, targetCoord, path = []) => {
    const originSquare = board.findSquareByCoord(originCoord);
    const targetSquare = board.findSquareByCoord(targetCoord);

    if (targetSquare.parent === originSquare) return path;

    path.unshift(targetSquare.parent.coord);

    return traverseParentRelations(originCoord, targetSquare.parent.coord, path);
  };

  const getShortestPath = (originCoord, targetCoord) => {
    createParentRelations(originCoord, targetCoord);

    const path = traverseParentRelations(originCoord, targetCoord);

    clearParentRelations();

    return [originCoord, ...path, targetCoord];
  };

  const knightMoves = (originCoord, targetCoord) => {
    const path = getShortestPath(originCoord, targetCoord);
    console.log(`=> You made it in ${path.length} moves!  Here's your path:`);
    path.forEach((step) => console.log(step));
  };

  return { knightMoves };
};

export default Knight;
