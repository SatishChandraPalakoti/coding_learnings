let moveZerosToLeft = function(nums) {
  //TODO: Write - Your - Code
  //[-1, 0, 0, -2, 9]
  let read = nums.length-1
  let write = read 
  while(read>=0){ 
    if(nums[read]==0){
      read--;
      if(nums[read]!==0)
      { 
        nums[write]=nums[read]
        write--;
      }
    }else{
      write--;
      read--;
    }
    if(read==0)
    break
  }
  while(write>=0){
    nums[write]=0
    write-- 
  }
  return nums

};

console.log(moveZerosToLeft([1, 0, 2, 3, 0]))