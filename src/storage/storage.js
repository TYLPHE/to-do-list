import factory from './factory.js';
let storage = {
    id: 0,
    storage: [],
    getset: () => {
        if(localStorage.getItem(`todo-TYLPHE`) == null){
            //set a file for to do items
            localStorage.setItem(`todo-TYLPHE`, []);

            //prepopulate some items and push it to table
            let tomorrow = `${new Date().getFullYear()}-${new Date().getMonth()+1}-28T12:00`;
            let soon = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}T` + new Date().getHours() + `:59`;
            let overdue = `${new Date().getFullYear()}-01-01T` + new Date().getHours() + `:` + (new Date().getMinutes()<10?`0`:``) + new Date().getMinutes();
            let schedule1 = factory(tomorrow, `Pay bills`, `High`, `tab-2`);
            let schedule2 = factory(soon,`Laundry`, `Low`, `tab-3`);
            let schedule3 = factory(overdue, `Party`, `Medium`, `tab-4`);
            let schedule4 = factory(soon, `Drink water`, `Medium`, `tab-5`);
            storage.storage.push(schedule1);
            storage.storage.push(schedule2);
            storage.storage.push(schedule3);
            storage.storage.push(schedule4);
            console.table(storage.storage);
            //create another file to remember ID number for generation
            localStorage.setItem(`todo-id-TYLPHE`, 0);
    
            storage.save();
        }
        else{
            let save = localStorage.getItem(`todo-TYLPHE`);
            storage.storage = JSON.parse(save);

            let id = localStorage.getItem(`todo-id-TYLPHE`);
            storage.id = JSON.parse(id);
        }
    },
    save: () => {
        let save = JSON.stringify(storage.storage);
        let id = JSON.stringify(storage.id);
        localStorage.setItem(`todo-TYLPHE`, save);
        localStorage.setItem(`todo-id-TYLPHE`, id);
    },
    sort: () => {
        storage.storage.sort(
            (a, b) => {
                if(a.due < b.due){
                    return -1;
                }
                if (a.due > b.due){
                    return 1;
                }
                return 0;
            }
        );
        console.log(storage.storage);
    },
}
export default storage;