var combinationSum = function(candidates, target) {
  let answer=[]   
  solution(candidates, answer, target,[],0)
  console.log(answer)
};

let solution = function (inputArr, result=[], target, subResultArray=[],index){  
  let subResultArrayx=null
  if(0==target)
    { 
      return result.push(subResultArray)
    }
  if(0>target)
    return
  for(var i=index;i<inputArr.length;i++){ 
    if(inputArr[i]>target) break
    subResultArrayx=Array.from(subResultArray)
    subResultArrayx.push(inputArr[i])
    solution(inputArr, result,target-inputArr[i],subResultArrayx, i)
  }
} 

combinationSum([2,3,6,7],7)