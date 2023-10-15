import { ifError } from "assert";
import inquirer from "inquirer";



let todo :string[] = [];
let loop = true;
while(loop){

    const answers:{
        TODO: string;
        addmore:boolean;



    } = await inquirer.prompt([
        {
            type:"input",
            name:"TODO",
            message:"add your tasks in  Todo"
        },
        {
            type:"confirm",
            name:"addmore",
            message:"Do you want to add more tasks in todo?",
            default:false,
        }


    ])

    const{TODO,addmore} = answers;
    console.log(answers);
    loop = addmore;
    if (TODO) {
        todo.push(TODO)
        
    }
    else{
        console.log("enter the input")
    }
    console.log(TODO)

    if (todo.length>0) {
        console.log("Your todo list is:")
        todo.forEach(todo=>{
            console.log(todo)
        })
        
    }
    else{
        console.log("No todo found")
    }



}
