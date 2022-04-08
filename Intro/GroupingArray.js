// Given an array of ints, is it possible to divide the ints into two groups, so that the sum of the two groups is the same, with these constraints: all the values that are multiple of 5 must be in one group, and all the values that are a multiple of 3 (and not a multiple of 5) must be in the other. (No loops needed.)

let subSolution2 = function(inArr, index, left, right, leftArr,rightArr){
 
  if(inArr.length==index){ 
    if(left==right){ 
       console.log("Left arr", leftArr.split(''))
       console.log("Right arr", rightArr.split(''))
    }
    return left==right
    }else{   
    if(inArr[index]>=3 && inArr[index]%3==0)
      return subSolution2(inArr, index+1, inArr[index]+left, right, leftArr+(inArr[index]).toString(), rightArr) 
    else if(inArr[index]>=5 && inArr[index]%5==0)    
    return subSolution2(inArr, index+1, left, inArr[index]+right, leftArr, rightArr+(inArr[index]).toString())
       else
      return subSolution2(inArr, index+1, inArr[index]+left, right, leftArr+(inArr[index]).toString(), rightArr) || subSolution2(inArr, index+1, left, inArr[index]+right, leftArr, rightArr+(inArr[index]).toString())
    }
}
let solution  = function(inputArr){
  // return subSolution(inputArr,0,0,0)
  return subSolution2(inputArr,0,0,0,"","")
}

let subSolution = function(inArr, index, left,right) {
  if(inArr.length==index)
    { 
      return left==right && left!=0}
    else{  
      if(inArr[index]>=3 && inArr[index]%3==0)
        return subSolution(inArr, index+1, left+inArr[index], right)  
      else if(inArr[index]>=5 && inArr[index]%5==0)
        return  subSolution(inArr, index+1, left, right+inArr[index])
      else
      return subSolution(inArr, index+1, left+inArr[index], right) || subSolution(inArr, index+1, left, right+inArr[index])
    
  }
}

console.log("-->", solution([3,3,5,1]))
console.log("-->", solution([2,4,2]))
 



