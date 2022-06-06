function addBinary(a: string, b: string): string {
  let lengthA = a.length - 1;
  let lengthB = b.length - 1;
  let result: number[] = [];
  let carry: number = 0;
  while( lengthA >= 0 || lengthB >= 0) {
    if(a[lengthA] && b[lengthB]) {
      result.push(getSubResult(+a[lengthA], +b[lengthB], carry));
    }else if( a[lengthA] && !b[lengthB]) {
      result.push(getSubResult((+a[lengthA]), 0, carry));
    }else if( !a[lengthA] && b[lengthB]) {
      result.push(getSubResult(0, (+b[lengthB]),  carry));
    }
    lengthA--;
    lengthB--;
  }

  if(carry) {
    result.push(getSubResult(0, 0, carry));
  }

  function getSubResult(a: number, b: number, c: number ): number {
    console.log(a, b, "a + b");
    let r = a + b + c;
    carry  = Math.floor(r / 2);
    r = r % 2;
    console.log(r, carry, "r, carry");
    return r;
  }

  function setResult(): string {
    return reverseResult(result).join('');
  }

  function reverseResult(value: number[]): number[]{
    return value.reverse();
  }

  return setResult();
};
const a = addBinary("11", "1");
console.log(a);
