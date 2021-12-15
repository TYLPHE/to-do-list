import storage from '../storage/storage.js';
import options from './rowOptions.js';
import lastEdited from './lastEdited.js';

//push populates table
let push = {
    init: () => {
        push.removeRows();
        push.addRows();
        options();
        lastEdited.highlight();
    },
    //remove all the rows in table
    removeRows: () => {
        while(document.querySelector(`.list`)){
            document.querySelector(`.table`).removeChild(document.querySelector(`.list`));
        }
    },
    //read storage array and append rows to page
    addRows: () => {
        for(let i = 0; i < storage.storage.length; i++){
            let row = document.createElement(`tr`);
            row.classList.add(`list`);;
            let due = document.createElement(`td`);
            let desc = document.createElement(`td`);
            let priority = document.createElement(`td`);
            let options = document.createElement(`td`);
                due.className = `due-${storage.storage[i].id} due`;
                desc.className = `desc-${storage.storage[i].id} desc`;
                priority.className = `priority-${storage.storage[i].id} priority`;
                options.className = `options-${storage.storage[i].id} options`;
                due.textContent = push.dateSplitter(i);
                desc.textContent = storage.storage[i].desc;
                priority.textContent = storage.storage[i].priority;
            row.append(due, desc, priority, options);
            row.id = storage.storage[i].id;

            let table = document.querySelector(`.table`);
                table.appendChild(row);
            
            //search array for overdue tasks and mark them red and overdue
            push.overdue(row, due, i);

            //search array for completed items and cross them out
            push.markComplete(row, due, desc, i);
        }
    },
    //convert the Date().toISOString() to a more friendly format
    dateSplitter: (i) => {
        let today = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
        //slice out date from time
        let date = storage.storage[i].due;
        date = date.slice(0, 10);

        //flip yyyy-dd-mm to mm-dd-yyyy lol
        let dd = date.slice(8);
        let mm = date.slice(5, 7);
        let yy = date.slice(0, 4);
        let formatDate = `${mm}-${dd}-${yy}`;
        //slice out time from date
        let time = storage.storage[i].due;
        time = time.slice(11);
        let convertedTime = push.convert24to12(time);
        //omit date if due today
        if(today == date){
            return convertedTime;
        }
        else{
            return `${formatDate}\n${convertedTime}`;
        }
    },
    //add overdue div if time is over now
    overdue: (row, due, i) => {
        let now = push.currentTime();
        let date = storage.storage[i].due;
        let compare = push.compare(date, now);
        if(compare <= 0){
            row.classList.add(`overdue`);
            let overdue = document.createElement(`div`);
            overdue.textContent = `(Overdue)`;
            due.appendChild(overdue);
        }
    },
    //change time format to AM/PM
    convert24to12: (time) => {
        let hh = time.slice(0,2);
        let mm = time.slice(3);
        if(hh - 12 > 0){
            hh = hh-12;
            return `${hh}:${mm} PM`;
        }
        else if(hh - 12 == 0){
            return `12:${mm} PM`;
        }
        else if(hh == 0){
            return `12:${mm} AM`;
        }
        else{
            return `${hh-0}:${mm} AM`;
        }
    },
    //update current time to properly mark overdue lists.
    currentTime: () => {
        let now = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}T`  + new Date().getHours() + `:` + (new Date().getMinutes()<10?`0`:``) + new Date().getMinutes();
        return now;
    },
    //compare date values for overdue function
    compare: (date, now) => {
        let compare = date.localeCompare(now)
        return compare;
    },
    //change complete button to green if completed
    markComplete: (row, due, desc, i) => {
        if(storage.storage[i].complete){
            //remove the overdue text
            if(due.lastChild.textContent === `(Overdue)`){
                due.removeChild(due.lastChild);
            }
            //remove the red overdue class
            if(row.classList.contains(`overdue`)){
                row.classList.remove(`overdue`);
            }
            desc.classList.add(`completed`);
            let complete = document.createElement(`div`);
            complete.textContent = `(Complete)`;
            due.appendChild(complete);
            row.classList.add(`completed`);
        }
    },
}
export default push.init;