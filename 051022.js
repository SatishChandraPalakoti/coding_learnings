//combination sum (no repitition)

// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

let candidates = [10,1,2,7,6,1,5]
// let candidates = [2,6,8]

let solver = function(candidates,target){
  let result=[]
  cSolver(result, candidates, [], 0, target, 0)
  return result
}
let deduper=(child,parent)=>{
  let isDuplicate=false
  parent.every((parentElement,parentElementIndex)=>{
      if(parentElement.length==child.length)
         { 
           isDuplicate = parentElement.sort().join()==child.sort().join()
         }
    return !isDuplicate
  })
  return isDuplicate
}


// let deduper2=(child,parent)=>{
//   console.log("\nchild is", child)
//   let isDuplicate=false
//   parent.every((parentElement,parentElementIndex)=>{
//     if(child.length==parentElement.length){
      
//     console.log("Comparing ", parentElement, " with ", child)
//        parentElement.every((element,elementIndex)=>{
//          isDuplicate = child.includes(element)
//          // console.log("Is", element, " part of ", child,"-->", isDuplicate)
//          return isDuplicate
//        })
//     }
//     return !isDuplicate
//       })
//   return isDuplicate
// }

let cSolver = (result, candidates, interimResult, index, target, sum)=>{
    if(index==candidates.length){
      if(sum==target){
        if(!deduper(interimResult,result))
        result.push(interimResult)
      }
      return
    }else{
      if(sum+candidates[index]<=target){ 
        let newsum=sum+candidates[index]
        let cpyInterR = Array.from(interimResult)
        cpyInterR.push(candidates[index])
        cSolver(result,candidates,cpyInterR, index+1, target, newsum)
      }
      cSolver(result,candidates,interimResult, index+1, target, sum) 
    }
}
console.log(solver([4,1,1,4,4,4,4,2,3,5],10))


