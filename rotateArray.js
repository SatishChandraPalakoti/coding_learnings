let rotateArray = function(nums, n) {
  //TODO: Write - Your - Code
  //method for left rotate
  
  let result=[]
  if(n==0){
    console.log("Returning nums", nums)
  return nums
  }

  
    else if(n<0){
       
      let elementsFromFirst = (n*-1)-1//0 
      
      for(var i=elementsFromFirst+1;i<nums.length;i++){
        result.push(nums[i])
      }
      console.log("-->", result)
      for(var i=0;i<=elementsFromFirst;i++){
        result.push(nums[i])
      }
      console.log("-->", result)
      return result
    }
  //method for right rotate
  else if(n>0){
     
      let elementsFromLast = nums.length-n
      for(var i=0; i<elementsFromLast;i++){
        result.push(nums[i])
      }
      console.log("-->", result)
      for(var i=nums.length-1; i>=elementsFromLast; i--){
        result.unshift(nums[i])
      }
      console.log("-->", result)
      return result
  } 
};


// rotateArray([1,2,3,4,5,6,7], 3)
//5,6,7,1,2,3,4

rotateArray([1,10,20,0,59,86,32,11,9,40], -3)
//[0,59,86,32,11,9,40,1,10,20]