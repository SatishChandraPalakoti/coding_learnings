let tasks = [{"name":"t1", "status":0, "timeElapsed":0},
            {"name":"t2", "status":0, "timeElapsed":0},
            {"name":"t3", "status":0, "timeElapsed":0},
            {"name":"t4", "status":0, "timeElapsed":0}]

let workers = [{"name":"w1"},
            {"name":"w2"},
            {"name":"w3"},
            {"name":"w4"}]

let taskAssigner=()=>{
  //from perspective of tasks
  let comparison = workers.length===tasks.length?"equal":tasks.length<workers.length?"less":"more"
  
  switch(comparison){
    case "equal": allotment(true, workers.length-1) break; 
    case "more": allotment(true, workers.length-1) break;
    case "less": allotment(false, tasks.length-1) break;
    case default: console.log("Invalid selection!");
  }
  allotment()
}

let allotment=(areTasksLess, workerQueue)=>{
  if(areTasksLess){
    
  }else{
    
  }
}