import factory from './factory.js';
let storage = {
    id: 0,
    storage: [],
    getset: () => {
        if(localStorage.getItem(`todo-TYLPHE`) == null){
            //set a file for to do items
            localStorage.setItem(`todo-TYLPHE`, []);

            //prepopulate some items and push it to table
            let schedule1 = factory(`2021-11-01T03:15`, `Pay bills`, `Medium`);
            let schedule2 = factory(`2021-10-01T14:15`,`Laundry`, ``);
            let schedule3 = factory(`2021-12-01T23:15`, `Codin Project`, `High`);
            storage.storage.push(schedule1);
            storage.storage.push(schedule2);
            storage.storage.push(schedule3);

            //create another file to remember ID number for generation
            localStorage.setItem(`todo-id-TYLPHE`, 0);
    
            console.log(storage.id);
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
        console.log(`saved`);
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