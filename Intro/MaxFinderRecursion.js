let array=[9,2,5,11,4,8]

let maxFinder = function(inputArr){
    if(inputArr.length>0){
      let max=inputArr.pop()
      let newMax=maxFinder(inputArr)
      if(newMax!==null){
        max=max<newMax?newMax:max
      }
      return max
    }else{
      return null
    }  
}

console.log(maxFinder(array))