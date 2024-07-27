let todo = [];
let req=prompt("Enter your choice");

while(true){
    if(req=="quit"){
        console.log("quitting todo app");
        break;
    }
    else if(req=="list"){
        console.log("------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("------------");
    }
    else if(req=="add"){
        let task=prompt("Enter your task");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
        let idx=prompt("Enter your task idx");
        idx=parseInt(idx)
        todo.splice(idx,1);
        console.log("deleted successfully")
    }
     req=prompt("Enter your choice");

}