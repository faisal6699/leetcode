function generateMatrix(n: number): number[][] {
  let pivot: string = 'col';
  let col: number = 0;
  let row: number = 0;
  let latest_length: number = n - 1 ;
  let circle: number = 0;
  let result: number[][] = [];

  for(let i = 0; i< n; i++){
    let arr: number[] = [];
    result.push(arr);
  }


  for( let i = 0; i< n*n; i++) {
    if (pivot === 'col') {
      setColValue(i + 1);
    } else if (pivot === 'row') {
      setRowValue(i + 1);
    }else if(pivot === 'col_rev'){
      setColRevValue(i + 1);
    }else {
      setRowRevValue(i + 1);
    }
  }

  function setColValue(value: number) {
    result[row][col] =  value;
    if(col !== (latest_length - circle)){
      col++;
    }else {
      row++;
      pivot = 'row';
    }
  }

  function setRowValue(value: number) {
    result[row][col] = value;
    if(row !== (latest_length - circle)){
      row++;
    }else {
      col--;
      pivot = 'col_rev';
    }
  }

  function setColRevValue(value: number) {
    result[row][col] = value;
    if(col !== circle){
      col--;
    }else{
      row--;
      pivot = 'row_rev';
      circle++;
    }
  }

  function setRowRevValue(value: number) {
    result[row][col] = value;
    if(row !== circle) {
      row--;
    }else {
      pivot = 'col';
      col++;

    }
  }

  return result;
};

const a: number[][] = generateMatrix(2);
console.log(a);
