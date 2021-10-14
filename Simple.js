let list=[9,3,4,6,2]

if(list.length==1)
  return list[0]
if(list.length==2)
  return Math.min(list[0],list[1])
else {
  if(firstItem==undefined && secondItem==undefined){
    firstItem=list[0]
    secondItem=list[1]
  }
  for(let i=2;i<list.length;i++){
    firstItemAlter=Math.max(firstItem,list[i])
    if(firstItemAlter!=firstItem){
      secondItem=firstItem
    }
    
  }
}