let arr1=[2,4,5,3]
let arr2=[1,7,4,2,8]

let primaryArr = arr1.length>arr2.length? arr1:arr2
let secondaryArr = arr1.length<arr2.length? arr1:arr2
let duplicates=[]
primaryArr.forEach((element,index)=>{
  for(let x =0;x<secondaryArr.length;x++){
    if(element==secondaryArr[x]){
      duplicates.push(element)
    }
  }
  if(index==primaryArr.length-1)
    console.log(duplicates)
})