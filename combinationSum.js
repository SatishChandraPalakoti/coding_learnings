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

// combinationSum([2,3,6,7],7)



var combinationSum2 = function(candidates, target) {
  var res = [];
  var len = candidates.length;
  candidates.sort((a, b) => (a - b));
  dfs(res, [], 0, len, candidates, target);
  return res;
};

var dfs = function (res, stack, index, len, candidates, target) {
  var tmp = null;
  if (target < 0) return;
  if (target === 0) return res.push(stack);
  for (var i = index; i < len; i++) {
    if (candidates[i] > target) break;
    if ( i> index && candidates[i] === candidates[i - 1])   continue;
    tmp = Array.from(stack);
    tmp.push(candidates[i]);
    dfs(res, tmp, i + 1, len, candidates, target - candidates[i]);
  }
};


// console.log(combinationSum2([10,1,2,7,6,1,5],8))
console.log(combinationSum2([2,3,5],8))


const numbers = [4, 2, 50, 1, 3];
numbers.sort(function(a, b) {
  console.log("a,b :",a,",",b, "a-b->", a-b)
  return a - b;
});
// console.log(numbers);


