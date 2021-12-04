import storage from './storage.js';

//push populates table
export default function push(){
    //remove all lists
    while(document.querySelector(`.list`)){
        document.querySelector(`.table`).removeChild(document.querySelector(`.list`));
    }
    //read array and draw new list
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
        row.id = i;

        let table = document.querySelector(`.table`);
            table.appendChild(row);
    }
    console.log(storage.storage.length - 1)
    let lastAdded = document.getElementById(storage.storage.length - 1);
    lastAdded.classList.add(`last-added`);
}