function isValidSudoku(board: string[][]): any {
  let first_grid: string[] = [];
  let secoend_grid: string[] = [];
  let third_grid: string[] = [];
  for( let i=0; i< board.length; i++) {
    let isFalseSubBox: boolean = checkSubBox(board[i])
    if(!isFalseSubBox)  return false;
    let left_array: string[] = [];
    let right_array: string[] = [];
    for( let j =0; j < board.length; j++) {
      right_array.push(board[j][i])
      left_array.push(board[i][j]);
      if(j <=2 ) first_grid.push(board[i][j]);
      else if( j > 2 && j < 6) secoend_grid.push(board[i][j]);
      else third_grid.push(board[i][j]);
    }
    isFalseSubBox = checkSubBox(left_array);
    if(!isFalseSubBox)  return false;
    isFalseSubBox = checkSubBox(right_array)
    if(!isFalseSubBox)  return false;
    if((i + 1) % 3 === 0) {
      isFalseSubBox = checkSubBox(first_grid);
      if(!isFalseSubBox)  return false;
      isFalseSubBox = checkSubBox(secoend_grid);
      if(!isFalseSubBox)  return false;
      isFalseSubBox = checkSubBox(third_grid);
      if(!isFalseSubBox)  return false;
      first_grid = [];
      secoend_grid = [];
      third_grid = [];
    }
  }
  return true;
};

function checkSubBox(boardSubBox: string[]): boolean {
  let arr: string[] = [];
  for(let k =0; k < boardSubBox.length; k++) {
    if(boardSubBox[k] !== "." && arr.some(item => item === boardSubBox[k])) return false;
    arr.push(boardSubBox[k]);
  }
  return true;
}

console.log(isValidSudoku(
    [[".",".",".",".","5",".",".","1","."],
      [".","4",".","3",".",".",".",".","."],
      [".",".",".",".",".","3",".",".","1"],
      ["8",".",".",".",".",".",".","2","."],
      [".",".","2",".","7",".",".",".","."],
      [".","1","5",".",".",".",".",".","."],
      [".",".",".",".",".","2",".",".","."],
      [".","2",".","9",".",".",".",".","."],
      [".",".","4",".",".",".",".",".","."]])
);

