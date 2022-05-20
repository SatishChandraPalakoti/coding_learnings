// Find Vowels in a string (Recursive)

let vowelFinder = function(String){
    if(String.length==0)
      return 0
    else {
     let character = String.charAt(String.length-1)
       if (character=='a'||character=='e'||character=='i'||character=='o'||character=='u'){ 
        let count=1
        String = String.substr(0,String.length-1)
        return count+vowelFinder(String)
       }else{
         String = String.substr(0,String.length-1)
         return vowelFinder(String)
       }
   }
}

console.log(vowelFinder("alphabet"))

// Find Vowels in a string (Iterative)
 

let vowelFinderIter = function(String ,count=0){
     for(var iter=0; iter<String.length; iter++){ 
         if(String.charAt(iter)=='a'|| String.charAt(iter)=='e' || String.charAt(iter)=='i' || String.charAt(iter)=='i' || String.charAt(iter)=='o' || String.charAt(iter)=='u'){
             count+=1
         }
         if(iter==String.length-1)
        return count
     }
     

}

console.log(vowelFinderIter("alphabet"))

