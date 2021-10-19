let list=[2,3,4,16,2]

if(list.length==1)
  return list[0]
if(list.length==2)
  return Math.min(list[0],list[1])
else {
  // console.log("Inside the else block") 
    firstItem=list[0]>list[1]?list[0]:list[1]
    secondItem=list[0]<list[1]?list[0]:list[1]
  
  for(let i=2;i<list.length;i++){ 
    secondItem=Math.max(secondItem,list[i])
    if(secondItem>firstItem){
       [firstItem,secondItem]=[secondItem,firstItem]
    }
   }  
    console.log("second largest is", secondItem); 
}

// O(n)