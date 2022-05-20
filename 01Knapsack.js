//Given two integer arrays to represent weights and profits of ‘N’ items, we need to find a subset of these items which will give us maximum profit such that their cumulative weight is not more than a given number ‘C’. Write a function that returns the maximum profit. Each item can only be selected once, which means either we put an item in the knapsack or skip it.



let Weights=[ 2, 3, 1, 4 ]
let Profits=[ 4, 5, 3, 7 ]
let capacity = 5

let solver = function(results=[], weights, capacity, addedWeight=0, index){ 
  // console.log("Index is", index, addedWeight, weights[index+1])
      if(addedWeight==capacity)
          {
          console.log("Found", results)
            addedweight=0 
            return
          }
    if(index<weights.length){
      if(addedWeight<=capacity){
        addedWeight+=weights[index]
        // console.log("Index is", index, addedWeight, weights[index+1])
        results.push(weights[index]) 
        // console.log("Sending added weight", addedWeight)
         solver(results,weights,capacity,addedWeight,index+1)
      } 
      // console.log("Starting at ", index+1)
       
       solver([],weights,capacity,0,index+1)
    }
  return 0
}

solver([],Weights, capacity, 0, 0)