import factory from './factory.js';
let storage = {
    storage: [],
    getset: () => {
        if(localStorage.getItem(`todo-TYLPHE`) == null){
            localStorage.setItem(`todo-TYLPHE`, []);
            let schedule1 = factory(`2021-11-01T03:15`, `Pay bills`, `Medium`);
            let schedule2 = factory(`2021-10-01T14:15`,`Laundry`, ``);
            let schedule3 = factory(`2021-12-01T23:15`, `Codin Project`, `High`);
            storage.storage.push(schedule1);
            storage.storage.push(schedule2);
            storage.storage.push(schedule3);
            storage.save();
        }
        else{
            let save = localStorage.getItem(`todo-TYLPHE`);
            storage.storage = JSON.parse(save);
        }
    },
    save: () => {
        let save = JSON.stringify(storage.storage);
        localStorage.setItem(`todo-TYLPHE`, save);
        console.log(`saved`);
    }
}
export default storage;