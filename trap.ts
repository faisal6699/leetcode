function trap(height: number[]): number {
  let final_result: number = 0;
  // brute force
  // for( let i=0; i< height.length ; i++) {
  //   let left_max = 0, right_max = 0;
  //   for( let j = i; j < height.length; j++) {
  //     left_max = Math.max(left_max, height[j])
  //   }
  //   for( let k = i; k >= 0; k--) {
  //     right_max = Math.max(right_max, height[k])
  //   }
  //   final_result += Math.min(left_max, right_max) - height[i]
  // }

  //Dp
  let left_arr: number[] = [], right_arr: number[] = [];
    left_arr[0] = height[0];

    for( let j = 1; j < height.length; j++) {
      left_arr[j] = Math.max(left_arr[j - 1], height[j])
    }

    right_arr[height.length -1] = height[height.length - 1];
    for( let k = height.length - 2; k >= 0; k--) {
      right_arr[k] = Math.max(right_arr[k + 1], height[k])
    }

    for (let i =0; i< left_arr.length; i++) {
      final_result += Math.min(left_arr[i], right_arr[i]) - height[i]
    }

    // stack

  // let current = 0;
  // while (current < height.length) {
  //   while (!Stack.isEmpty() && height[current] > height[Stack.top()]) {
  //     const top = Stack.top();
  //     Stack.remove();
  //     if(Stack.isEmpty()) break;
  //     const distance = current - Stack.top() - 1;
  //     const temp_height = Math.min(height[current], height[Stack.top()])  - height[top]
  //     final_result += distance * temp_height;
  //   }
  //   Stack.add(current);
  //   current += 1;
  // }
  return final_result
};


console.log(trap([4,2,0,3,2,5]));
