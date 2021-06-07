import readlineSync from "readline-sync";
import fs from "fs";

const options = ['add', 'list', 'check', 'remove', 'pomodoro'];
const notDone = '🔴';
const done = '🟢';
let keepRunning = true;
let toDos = [];

if(fs.existsSync("./todo-data.txt")) {
    toDos = JSON.parse(fs.readFileSync('./todo-data.txt'));
}

while(keepRunning !== false) {
    const action = readlineSync.keyInSelect(options, "Type your command");

    if(options[action] === 'add') {
        const task = readlineSync.question("What do you want to do? ");
        toDos.push({ task, done: notDone, pomodoro: "" });
        fs.writeFileSync("todo-data.txt", JSON.stringify(toDos));
    }

    if(options[action] === 'list') {
        console.log("=========================");
        toDos.forEach((todo) => {
            console.log(todo.done + " " + todo.task + " " + todo.pomodoro);
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
    
    if(options[action] === 'remove') {
        const tasks = toDos.map((item) => item.done + " " + item.task);
        const removeAction = readlineSync.keyInSelect(tasks, "What task do you want to remove?");

        toDos.splice(removeAction, 1);
        console.log(toDos);

        console.log("Task successfully removed!");
        console.log("=========================");
        toDos.forEach((todo) => {
            console.log(todo.done + " " + todo.task);
        });
        console.log("=========================");
    }

    if(options[action] === 'pomodoro') {
        const tasks = toDos.map((item) => item.done + " " + item.task);
        const pomodoroAction = readlineSync.keyInSelect(tasks, "What task do you want to have a pomodoro?");

        console.log(`Pomodoro of ${toDos[pomodoroAction].task} is set!`);
        
        toDos[pomodoroAction].pomodoro += "🍅";
        fs.writeFileSync("todo-data.txt", JSON.stringify(toDos));
    }
    
    if(options[action] === undefined) {
        keepRunning = false;
    }
}
