import readlineSync from "readline-sync";

const options = ['add', 'list', 'check', 'remove'];

let toDos = [];
let keepRunning = true;

while(keepRunning !== false) {
    const action = readlineSync.keyInSelect(options, "Type your command");

    if(options[action] === 'add') {
        toDos.push(readlineSync.question("What do you want to do? "));
    }

    if(options[action] === 'add') {
        toDos.push(readlineSync.question("What do you want to do? "));
    }

    if(options[action] === undefined) {
        keepRunning = false;
    }
    
    console.log(toDos);
    console.log(action);
    console.log(options[action]);
}
