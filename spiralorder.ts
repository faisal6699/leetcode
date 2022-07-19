function spiralOrder(matrix: number[][]): number[] {
  let pivot: 'left' | 'right' | 'top' | 'bottom' = 'left';
  let result: number[] = [], j: number = 0, i: number = 0;
  while (i < matrix[0].length || j < matrix[1].length) {
    if(pivot === 'left') {
      while (j < matrix[1].length) {
        if(result[i+j]) {
          pivot = 'bottom';
          break;
        }
        result.push(matrix[i][j]);
        j++;
      }
      pivot = 'bottom';
      i++;
    } else if( pivot === 'right') {
      j--;
      i--;
      while(j >= 0) {
        if(result[i+j]) {
          pivot = 'top';
          break;
        }
        result.push(matrix[i][j]);
        j--;
      }
      pivot = 'top';
    } else if( pivot === 'bottom') {
      j-=1
      while (i < matrix[1].length) {
        if(result[i + j]) {
          pivot = 'right';
          break;
        }
        result.push(matrix[i][j])
        i++;
      }
      pivot = 'right';
    } else {
      let goingUp: number = i;
      while (goingUp >= i) {

        if(result[goingUp + j]) {
          pivot = 'left';
          break;
        }
        result.push(matrix[goingUp][j])
        goingUp--;
      }
      pivot = 'left';
    }
  }

  return result;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
