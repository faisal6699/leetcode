/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const tempArr: number[] = []
  for( let i =0; i < matrix[0].length; i++) {
    if(matrix[1]) {
      for(let j=matrix[1].length - 1; j >=0 ; j--) {
        tempArr.push(matrix[j][i])
      }
    }
  }

  let counter: number = 0;
  for( let i =0; i < matrix[0].length; i++) {
    if(matrix[1]) {
      for(let j=0; j < matrix[1].length; j++) {
        matrix[i][j] = tempArr[counter];
        counter++;
      }
    }
  }
  console.log(matrix);
};

rotate([[1]]);
