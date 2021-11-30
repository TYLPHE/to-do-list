import './style.css';
import form from './form/form.js';
import factory from './factory.js';

//table - create div to populate to do items.
let table = {
    tableDiv: document.createElement(`table`),
    init: () => {
        table.headers();
        document.body.append(form, table.tableDiv);
    },
    headers: () => {
        let row = document.createElement(`tr`);
        let due = document.createElement(`th`);
        let desc = document.createElement(`th`);
        let priority = document.createElement(`th`);
            due.textContent = `Due`;
            desc.textContent = `Description`;
            priority.textContent = `Priority`;
        row.append(due, desc, priority);
        table.tableDiv.append(row);
    },
    push: (list) => {
        let row = document.createElement(`tr`);
        let due = document.createElement(`td`);
        let desc = document.createElement(`td`);
        let priority = document.createElement(`td`);
            due.textContent = list.due;
            desc.textContent = list.desc;
            priority.textContent = list.priority;

        row.append(due, desc, priority);
        table.tableDiv.appendChild(row);
    }
};
table.init();

let schedule1 = factory(`hey`, `tyler`, `test`);
let schedule2 = factory(`now`,`red`, ``);
let schedule3 = factory(`blue`, `green`, `purple`);
table.push(schedule1);
table.push(schedule2);
table.push(schedule3);