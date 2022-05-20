/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
     let results=[]
     let array=[1,2,3,4,5,6,7,8,9]
     solver(array,n, 0, 0, [],results,k)
    return results
};


var dedpuer= function(child,parent){
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

var solver=function(combinations, target, index, sum ,iResults,results, k ){
    if(index==combinations.length){
        if(!dedpuer(iResults, results) && k==iResults.length && sum==target){
            results.push(iResults)
        }
        return
    }else{
        if(sum+combinations[index]<=target){
            let iResults_cpy=Array.from(iResults)
            iResults_cpy.push(combinations[index])
 solver(combinations,target,index+1,sum+combinations[index],iResults_cpy, results, k)
        }
         solver(combinations,target,index+1,sum,iResults, results, k)
    }
}


console.log(combinationSum3(3,7))