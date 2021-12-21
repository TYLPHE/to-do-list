import './css/style.css';
import './css/form.css';
import './css/table.css';
import './css/tab.css';
import form from './form/form.js';
import push from './table/push.js';
import storage from './storage/storage.js';
import tabs from './table/tabs.js';
//table - create div to populate to do items.
let table = {
    mainDiv: document.createElement(`div`),
    leftDiv: document.createElement(`div`),
    tableDiv: document.createElement(`table`),
    init: () => {
        storage.getset();
        table.mainDiv.className = `main-div`;
        table.tableDiv.className = `table`;
        table.tableDiv.appendChild(table.tableHeaders());
        table.mainDiv.append(tabs.init(), table.tableDiv);
        table.leftDiv.append(table.title(), form);
        document.body.append(table.leftDiv, table.mainDiv);
        push();
    },
    title: () => {
        let titleDiv = document.createElement(`a`);
        titleDiv.href = `https://github.com/TYLPHE`;
        titleDiv.classList.add(`title`);
        titleDiv.target = `_blank`;
        
        let avatar = document.createElement(`img`);
        avatar.src = `https://avatars.githubusercontent.com/u/85977718?v=4`;
        avatar.classList.add(`avatar`);

        let title = document.createElement(`div`);
        title.innerText = `To-Do List by TYLPHE`;
        title.classList.add(`title-text`);

        titleDiv.append(avatar, title);
        
        return titleDiv;
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
        return row;
    },
};
table.init();