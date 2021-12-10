import storage from './storage.js';
import rowOptions from './rowOptions.js';
import options from './rowOptions.js';

//push populates table
export default function push(){
    //remove all list items
    while(document.querySelector(`.list`)){
        document.querySelector(`.table`).removeChild(document.querySelector(`.list`));
    }
    //read array, draw new list, add id to highlight last added item
    console.log(storage.storage);
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
            due.textContent = dateSplitter();
            
            function dateSplitter(){
                //slice out date from time
                let date = storage.storage[i].due;
                date = date.slice(0, 10);
                //flip yyyy-dd-mm to mm-dd-yyyy lol
                let dd = date.slice(8);
                let mm = date.slice(5, 7);
                let yy = date.slice(0, 4);
                date = `${mm}-${dd}-${yy}`;
                //slice out time from date
                let time = storage.storage[i].due;
                time = time.slice(11);
                return `${date}\n${time}`;
            }

            desc.textContent = storage.storage[i].desc;
            priority.textContent = storage.storage[i].priority;

        row.append(due, desc, priority, options);
        row.id = storage.storage[i].id;

        let table = document.querySelector(`.table`);
            table.appendChild(row);
        }
    let lastAdded = document.getElementById(storage.id);
    lastAdded.classList.add(`last-added`);
    options.init();
}