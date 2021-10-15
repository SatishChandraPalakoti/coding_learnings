let list=[2,3,4,5,4]

for(let i=0;i<list.length;i++){
  for(let j=i+1;j<list.length;j++){
    if(list[i]==list[j]){
      console.log("Duplicate found", list[i])
    }
  }
}