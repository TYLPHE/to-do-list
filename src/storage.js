import factory from './factory.js';
let storage = {
    storage: [],
    getset: () => {
        if(localStorage.getItem(`todo-TYLPHE`) == null){
            localStorage.setItem(`todo-TYLPHE`, []);
            let schedule1 = factory(`hey`, `tyler`, `test`);
            let schedule2 = factory(`now`,`red`, ``);
            let schedule3 = factory(`blue`, `green`, `purple`);
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