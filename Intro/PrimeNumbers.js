let x1=4,x2=100

 let list=[]
 let x=19
 let p=2
 let isPrimse=true


for(let i=x1;i<=x2;i++){

while(p<i){
  if(i%p==0){
    isPrimse=false
    break;
  }
  if(i%p!=0){
  // list.push(p)
  p++;
  }
}

if(isPrimse)
    list.push(i)
      
isPrimse=true
p=2 
    
}
console.log("Primes", list)




// 