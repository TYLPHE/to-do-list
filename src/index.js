import './style.css';
import form from './form/form.js';
import factory from './factory.js';
import push from './push.js';
import storage from './storage.js';

//table - create div to populate to do items.
let table = {
    tableDiv: document.createElement(`table`),
    init: () => {
        storage.getset();
        table.headers();
        table.tableDiv.className = `table`;
        document.body.append(form, table.tableDiv);
        let schedule1 = factory(`hey`, `tyler`, `test`);
        let schedule2 = factory(`now`,`red`, ``);
        let schedule3 = factory(`blue`, `green`, `purple`);
        storage.storage.push(schedule1);
        storage.storage.push(schedule2);
        storage.storage.push(schedule3);
        push();
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
};
table.init();