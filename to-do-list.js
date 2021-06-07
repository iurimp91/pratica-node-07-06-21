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
        console.log("=========================");
        toDos.forEach((todo) => {
            console.log(todo.done + " " + todo.task);
        });
        console.log("=========================");
    }

    if(options[action] === 'check') {
        const tasks = toDos.map((item) => item.done + " " + item.task);
        const checkAction = readlineSync.keyInSelect(tasks, "What do you want to check/uncheck?");

        if(toDos[checkAction].done === notDone) {
            toDos[checkAction].done = done;
            console.log(`${toDos[checkAction].task} was checked as done! 🟢`);
        } else {
            toDos[checkAction].done = notDone;
            console.log(`${toDos[checkAction].task} was checked as undone! 🔴`);
        }
    }

    if(options[action] === undefined) {
        keepRunning = false;
    }
}
