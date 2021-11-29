import './style.css';
let table = {
    tableDiv: document.createElement(`table`),
    headers: () => {
        let row = document.createElement(`tr`);
        let due = document.createElement(`th`);
        due.textContent = `Due`;
        let title = document.createElement(`th`);
        title.textContent = `Title`;
        let desc = document.createElement(`th`);
        desc.textContent = `Description`;
        let priority = document.createElement(`th`);
        priority.textContent = `Priority`;
        row.append(due, title, desc, priority);
        table.tableDiv.append(row);
        document.body.appendChild(table.tableDiv);
    },
    push: (list) => {
        let row = document.createElement(`tr`);
        let due = document.createElement(`td`);
        let title = document.createElement(`td`);
        let desc = document.createElement(`td`);
        let priority = document.createElement(`td`);

        if(list.due){
            due.textContent = list.due;
        }
        else{
            due.textContent = ` `;
        }
        if(list.title){
            title.textContent = list.title;
        }
        else{
            title.textContent = ` `;
        }
        if(list.desc){
            desc.textContent = list.desc;
        }
        else{
            desc.textContent = ` `;
        }
        if(list.priority){
            priority.textContent = list.priority;
        }
        else{
            priority.textContent = ` `;
        }

        row.append(due, title, desc, priority);
        table.tableDiv.appendChild(row);
    }
};

//factory function to create to do contents
let factory = (due, title, desc,  priority) => {
    return {
        title: title,
        desc: desc,
        due: due,
        priority: priority,
    };
}
let schedule1 = factory(`hey`, `xiao`, `tyler`, `test`);
table.headers();
table.push(schedule1);