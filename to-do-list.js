import readlineSync from "readline-sync";

const options = ['add', 'list', 'check', 'remove'];

let toDos = [];
let keepRunning = true;
const notDone = '🔴';
const done = '🟢';

while(keepRunning !== false) {
    const action = readlineSync.keyInSelect(options, "Type your command");

    if(options[action] === 'add') {
        const task = readlineSync.question("What do you want to do? ");
        toDos.push({ task, done: notDone});
    }

    if(options[action] === 'list') {
        toDos.forEach((todo) => {
            console.log(todo.done + " " + todo.task);
        })
    }

    if(options[action] === undefined) {
        keepRunning = false;
    }
}
