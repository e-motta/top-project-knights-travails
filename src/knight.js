/* eslint-disable no-param-reassign */
const Knight = (board) => {
  const getShortestPath = (coord, targetCoord, path = [], shortestPath = []) => {
    const isCoordInPath = path.some((c) => c === coord);
    if (!isCoordInPath) {
      const square = board.findSquare(coord);

      path.push(coord);

      const squareLeavesToTarget = square.leaves.some(
        (l) => JSON.stringify(l) === JSON.stringify(targetCoord),
      );
      if (squareLeavesToTarget) path.push(targetCoord);

      const isShortestPath = shortestPath.length === 0 || path.length < shortestPath.length;
      console.log(isShortestPath);
      if (isShortestPath) {
        shortestPath = path;
        path = [];
      }
      square.leaves.forEach((l) => getShortestPath(l, targetCoord, path, shortestPath));
    }

    return shortestPath;
  };

  return { getShortestPath };
};

export default Knight;
