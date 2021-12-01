import storage from './storage.js';

//push populates table
export default function push(){
    for(let i = 0; i < storage.storage.length; i++){
        let row = document.createElement(`tr`);

        let due = document.createElement(`td`);
        let desc = document.createElement(`td`);
        let priority = document.createElement(`td`);
            due.textContent = storage.storage[i].due;
            desc.textContent = storage.storage[i].desc;
            priority.textContent = storage.storage[i].priority;

        row.append(due, desc, priority);

        let table = document.querySelector(`.table`);
            table.appendChild(row);
    }
}