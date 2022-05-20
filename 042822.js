//combination sum



let solver=function(array, sum){
  let finalResult=[]
  combinationSum(array, sum, 0,0, finalResult, [])
  console.log(finalResult)
}


let combinationSum = function(inputArr,target, sum, index, finalResult, interimResult){
  if(index==inputArr.length){
    if(sum==target){
      // console.log(interimResult)
      finalResult.push(interimResult)
      
    }
    return
  }
  else{
    if(sum+inputArr[index]<=target){
      let interResult = Array.from(interimResult)
      interResult.push(inputArr[index])
      combinationSum(inputArr, target, sum+inputArr[index], index, finalResult, interResult)
    }
    combinationSum(inputArr, target, sum, index+1, finalResult, interimResult)
  }
      
}


solver([2,7,6,3,5,1]
//combination sum



let solver=function(array, sum){
  let finalResult=[]
  combinationSum(array, sum, 0,0, finalResult, [])
  console.log(finalResult)
}


let combinationSum = function(inputArr,target, sum, index, finalResult, interimResult){
  if(index==inputArr.length){
    if(sum==target){
      // console.log(interimResult)
      finalResult.push(interimResult)
            
    }
    return
  }
  else{
    if(sum+inputArr[index]<=target){
      let interResult = Array.from(interimResult)
      interResult.push(inputArr[index])
      combinationSum(inputArr, target, sum+inputArr[index], index, finalResult, interResult)
    }
    combinationSum(inputArr, target, sum, index+1, finalResult, interimResult)
  }
        
}


solver([2,7,6,3,5,1],9)
// [[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,2],[1,1,1,1,1,1,3],[1,1,1,1,1,2,2],[1,1,1,1,2,3],[1,1,1,1,5],[1,1,1,2,2,2],[1,1,1,3,3],[1,1,1,6],[1,1,2,2,3],[1,1,2,5],[1,1,7],[1,2,2,2,2],[1,2,3,3],[1,2,6],[1,3,5],[2,2,2,3],[2,2,5],[2,7],[3,3,3],[3,6]]
,9)
// [[1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,2],[1,1,1,1,1,1,3],[1,1,1,1,1,2,2],[1,1,1,1,2,3],[1,1,1,1,5],[1,1,1,2,2,2],[1,1,1,3,3],[1,1,1,6],[1,1,2,2,3],[1,1,2,5],[1,1,7],[1,2,2,2,2],[1,2,3,3],[1,2,6],[1,3,5],[2,2,2,3],[2,2,5],[2,7],[3,3,3],[3,6]]