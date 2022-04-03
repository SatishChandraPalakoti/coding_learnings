// Given an array of ints, is it possible to divide the ints into two groups, so that the sum of the two groups is the same, with these constraints: all the values that are multiple of 5 must be in one group, and all the values that are a multiple of 3 (and not a multiple of 5) must be in the other. (No loops needed.)


let solution  = function(inputArr){
  return subSolution(inputArr,0,0,0)
}

let subSolution = function(inArr, index, left,right) {
  if(inArr.length==index)
    {  console.log("Index is", index, left , right)
      return left==right}
    else{ 
    return subSolution(inArr, index+1, left+inArr[index], right) || subSolution(inArr, index+1, left, right+inArr[index])
  }
}

console.log("-->", solution([2,1,2]))

// let splitter = (input, part1, part2, position)=>{
//     if(input.length!=0){ 
//       for(var rInput=0; rInput<input.length;rInput++){ 
//       let newPart1=input.splice(input.length-1-rInput,input.length-1-position)
//       let newPart2=input.splice(position,rInput)
//       if splitter(input, newPart1, newPart2, position+1)
//           return true
//       }
//     }else{
//       let checkSumPart1=0
//         checkSumPart1 = part1.forEach(element){
//         checkSumPart1+=element
//       }
//       let checkSumPart2=0
//         checkSumPart2 = part2.forEach(element){
//         checkSumPart2+=element
//       }
//       if(checkSumPart1==checkSumPart2)
//         return true
//       else 
//         return false
//     } 
// }

