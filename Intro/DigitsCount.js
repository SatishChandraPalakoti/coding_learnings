//find occurrence of a digit in a number(recursion)

let occurrence = function(number, digit, count=0){
   if(number==0){
      return count+=digit==number?1:0
    }else if (number < 10 && number > 0){
      return count+=number==digit?1:0
    }else{
      let extractedNumber = number % 10
    count+= extractedNumber == digit?1:0
      return occurrence(Math.floor(number/10), digit, count)
    } 
  }
   
  console.log(occurrence(333333454, 4))