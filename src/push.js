import storage from './storage.js';

//push populates table
export default function push(){
    //remove all list items
    while(document.querySelector(`.list`)){
        document.querySelector(`.table`).removeChild(document.querySelector(`.list`));
    }
    //read array, draw new list, add id to highlight last added item
    for(let i = 0; i < storage.storage.length; i++){
        let row = document.createElement(`tr`);
        row.classList.add(`list`);;
        let due = document.createElement(`td`);
        let desc = document.createElement(`td`);
        let priority = document.createElement(`td`);
            due.style.textAlign = `center`;
            desc.style.textAlign = `justify`;
            priority.style.textAlign = `center`;
            due.textContent = dateSplitter();
            
            function dateSplitter(){
                //slice out date from time
                let date = storage.storage[i].due;
                date = date.slice(0, 10);
                //flip yyyy-dd-mm to mm-dd-yyyy lol
                let mm = date.slice(8);
                let dd = date.slice(5, 7);
                let yy = date.slice(0, 4);
                date = `${mm}-${dd}-${yy}`;
                //slice out time from date
                let time = storage.storage[i].due;
                time = time.slice(11);
                return `${date}\n${time}`;
            }

            desc.textContent = storage.storage[i].desc;
            priority.textContent = storage.storage[i].priority;

        row.append(due, desc, priority);
        row.id = storage.storage[i].id;

        let table = document.querySelector(`.table`);
            table.appendChild(row);
        }
    let lastAdded = document.getElementById(storage.id);
    lastAdded.classList.add(`last-added`);
}