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
  var factorial = function(n) {
    if (n === 0) {
      return 1;
    }

    return n * factorial(n - 1);
  };
  var solutionCount = factorial(n); //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var newBoard = new Board({n: n});
  var board = newBoard.rows();
  var storage = {};
  var row = 0;
  var start = 0;

  var queenSearch = function(queenSearchRow, queenSearchCol) {
    var searchRow = newBoard.get(queenSearchRow);

    //toggle a piece to be OFF if it's there, since it shouldn't be there
    if (searchRow.indexOf(1) !== -1) {
      var queenPosition = searchRow.indexOf(1);
      newBoard.togglePiece(queenSearchRow, queenPosition);
    }

    // check for queens conflicts and try to fix it.
    // var noQueen = true;
    // var initializeToggle = start;
    // while (noQueen && initializeToggle < board.length) {

      var toggle = function(toggleRow, toggleCol) {
        var currToggleCol = toggleCol;
        newBoard.togglePiece(toggleRow, toggleCol);


        if (newBoard.hasAnyQueensConflicts()) {
          newBoard.togglePiece(toggleRow, toggleCol);
          
          if (currToggleCol === board.length - 1) {
            return;
          }          
          toggle(toggleRow, currToggleCol++);          
        } else {
          storage[toggleRow] = [toggleRow, currToggleCol];
        }
      };
      toggle(row, start);  


    }// queen search end  

   };


  
  queenSearch(row, start);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(newBoard));
  return board;
    // console.log(n);
  // debugger;
  // var newBoard = new Board({n: n});
  // var board = newBoard.rows();

  // var col = -1;

  // var counter = function(arrOfarr) {
  //   var count = 0;
  //   for (var i = 0; i < arrOfarr.length; i++) {
  //     if (arrOfarr[i].indexOf(1) !== -1) {
  //       count ++;
  //     }
  //   }
  //   console.log(count);
  //   return count;
  // };

  // var queenSearch = function() {
  //   board.forEach(function(arr, rowIndex) {
  //     arr.forEach(function(item, colIndex) {
  //       newBoard.togglePiece(rowIndex, colIndex);
  //       if (newBoard.hasAnyQueensConflicts()) {
  //         newBoard.togglePiece(rowIndex, colIndex);
  //       }
  //     });
  //   }); //fixme
  //   if (counter(board) !== n) {
  //     col++;
  //     newBoard = new Board ({n: n});
  //     board = newBoard.rows();
  //     newBoard.togglePiece(0, col);
  //     queenSearch();
  //   }
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
