let inputArr = [55, 23, 26, 2, 18, 78, 23, 8, 2, 3]


let quickSort = function(arr, left, right){
  let mainLeft = left
  let mainRight = right
  let pivotElement = arr[left] 
  while(mainLeft<mainRight){ 
    while(mainLeft<=right && arr[mainLeft]<=pivotElement )
      mainLeft++
    while(arr[mainRight]>pivotElement)
      mainRight--
    if(mainLeft<mainRight){ 
      
      let temp=arr[mainLeft]
      arr[mainLeft]=arr[mainRight]
      arr[mainRight]=temp 
    }
  }
  arr[left]=arr[mainRight]
  arr[mainRight]=pivotElement 
  return mainRight;
  
}


let sorter = function(arr,left,right){
  if(left<right){
    let pivotIndex = quickSort(arr,left,right)
    console.log("Index is", pivotIndex)
    if(pivotIndex==5){
      console.log("6th Largest is", arr[pivotIndex])
    }
    sorter(arr,left, pivotIndex-1)
    sorter(arr,pivotIndex+1, right)
  }else{
     console.log("Finally", arr)
  } 
}

sorter(inputArr,0,inputArr.length-1)


// (function(arraytoSort){
//   sorter(arraytoSort, 0, inputArr.length-1)
// console.log("Result", arraytoSort)
// })(inputArr)