import './css/style.css';
import './css/form.css';
import './css/table.css';
import form from './form/form.js';
import push from './table/push.js';
import storage from './storage/storage.js';

//table - create div to populate to do items.
let table = {
    tableDiv: document.createElement(`table`),
    init: () => {
        table.tableDiv.className = `table`;
        storage.getset();
        table.tableHeaders();
        document.body.append(form, table.tableDiv);
        push();
    },
    tableHeaders: () => {
        let row = document.createElement(`tr`);
        let due = document.createElement(`th`);
        let desc = document.createElement(`th`);
        let priority = document.createElement(`th`);
        let options = document.createElement(`th`);
        due.className = `header-due`;
        priority.className = `header-priority`;
        options.className = `header-options`;
        due.textContent = `Due`;
        desc.textContent = `Description`;
        priority.textContent = `Priority`;
        options.textContent = `Options`;
        row.append(due, desc, priority, options);
        table.tableDiv.append(row);
    },
};
table.init();