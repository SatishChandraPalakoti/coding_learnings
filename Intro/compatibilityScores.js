// students=[[0,0],[0,0],[0,0]], mentors = [[1,1],[1,1],[1,1]]
students = [[1,1,0],[1,0,1],[0,0,1]], mentors = [[1,0,0],[0,0,1],[1,1,0]]

let compatibility=function(students, mentors,stIndex, mIndex){
  let total=0
  for(var s=stIndex;s<students.length;s++){
    let max=0
      
    console.log("**")
    for(var m=mIndex;m<mentors.length;m++){
      let score=0;
      let solutionsLength=mentors[m].length
      let iterator=0
      while(solutionsLength!==iterator){
        if(mentors[m][iterator]==students[s][iterator])
        {
          score++
        }
        iterator++
      }
      max=max<score?score:max
    }
    console.log("match-score", max)
    total+=max
  }
  return total
}

console.log(compatibility(students,mentors,0,0,0))