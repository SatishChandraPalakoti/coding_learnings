//find occurrence of a digit in a number(recursion)

let occurrence = function(number, digit){
  
   if(number==0){
      return digit==number?1:0
    }else if (number < 10 && number > 0){
      return number==digit?1:0
    }else{
     
      let extractedNumber = number % 10
      let count= extractedNumber == digit?1:0
      return count+occurrence(Math.floor(number/10), digit)
    } 
  }
   
  console.log(occurrence(333333454,3))
 