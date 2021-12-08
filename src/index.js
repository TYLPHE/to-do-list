import './css/style.css';
import './css/form.css';
import './css/table.css';
import form from './form/form.js';
import push from './push.js';
import storage from './storage.js';
import rowOptions from './rowOptions.js';

//table - create div to populate to do items.
let table = {
    tableDiv: document.createElement(`table`),
    init: () => {
        table.tableDiv.className = `table`;
        storage.getset();
        table.tableHeaders();
        document.body.append(form, table.tableDiv);
        push();
        rowOptions.hover();
    },
    tableHeaders: () => {
        let row = document.createElement(`tr`);
        let due = document.createElement(`th`);
        let desc = document.createElement(`th`);
        let priority = document.createElement(`th`);
        due.style.width = `7rem`;
        priority.style.width = `5rem`;
        due.textContent = `Due`;
            desc.textContent = `Description`;
            priority.textContent = `Priority`;
        row.append(due, desc, priority);
        table.tableDiv.append(row);
    },
};
table.init();