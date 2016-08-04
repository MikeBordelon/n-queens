/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var newBoard = new Board({n: n});
  var board = newBoard.rows();
  
  board.forEach(function(arr, rowIndex) {
    arr.forEach(function(item, colIndex) {
      newBoard.togglePiece(rowIndex, colIndex);
      if (newBoard.hasAnyRooksConflicts()) {
        newBoard.togglePiece(rowIndex, colIndex);
      }
    });
  });

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(newBoard));
  return board;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var newBoard = new Board({n: n});
  var board = newBoard.rows();
  newBoard.togglePiece(0, 0);
  
  board.forEach(function(arr, rowIndex) {
    arr.forEach(function(item, colIndex) {
      newBoard.togglePiece(rowIndex, colIndex);
      if (newBoard.hasAnyQueensConflicts()) {
        newBoard.togglePiece(rowIndex, colIndex);
      }
    });
  }); //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(newBoard));
  return board;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
