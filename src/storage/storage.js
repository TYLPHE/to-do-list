import factory from './factory.js';
let storage = {
    //id assigns each list a unique id#... not really using it but just in case.
    id: 0,

    //all lists are stored in storage[]
    storage: [],

    //active tab remembers which tab is active to filter out the correct list
    //available tab options: tab-1, tab-2, ...tab-5
    activeTab: `tab-1`,
    
    //create a localStorage file if none exists, otherwise load it.
    getset: () => {
        if(localStorage.getItem(`todo-TYLPHE`) == null){
            //set a file for to do items
            localStorage.setItem(`todo-TYLPHE`, []);

            //prepopulate some items and push it to table
            let soon = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}T` + (new Date().getHours()<10?`0`:``) + new Date().getHours() + `:59`;
            let soon1 = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}T` + (new Date().getHours()<10?`0`:``) + new Date().getHours() + `:51`;
            let soon2 = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}T` + (new Date().getHours()<10?`0`:``) + new Date().getHours() + `:05`;
            let tomorrow = `${new Date().getFullYear()}-${new Date().getMonth()+1}-28T12:00`;
            let tomorrow1 = `${new Date().getFullYear()}-${new Date().getMonth()+1}-28T13:00`;
            let overdue = `${new Date().getFullYear()}-01-01T` + (new Date().getHours()<10?`0`:``) + new Date().getHours() + `:` + (new Date().getMinutes()<10?`0`:``) + new Date().getMinutes();
            let overdue1 = `${new Date().getFullYear()}-12-24T` + (new Date().getHours()<10?`0`:``) + new Date().getHours() + `:` + (new Date().getMinutes()<10?`0`:``) + new Date().getMinutes();

            let schedule1 = factory(tomorrow, `Car maintenance`, `High`, `tab-2`);
            let schedule2 = factory(soon,`Laundry`, `Low`, `tab-3`);
            let schedule3 = factory(overdue, `Party`, `Medium`, `tab-4`);
            let schedule4 = factory(soon2, `Drink water`, `Medium`, `tab-5`);
            let schedule5 = factory(tomorrow1, `Pay bills`, `High`, `tab-2`);
            let schedule6 = factory(soon1,`Scrub bathroom`, `Low`, `tab-3`);
            let schedule7 = factory(overdue1, `Buy food`, `Medium`, `tab-4`);
            storage.storage.push(schedule1);
            storage.storage.push(schedule2);
            storage.storage.push(schedule3);
            storage.storage.push(schedule4);
            storage.storage.push(schedule5);
            storage.storage.push(schedule6);
            storage.storage.push(schedule7);

            //create another file to remember ID number for generation
            localStorage.setItem(`todo-id-TYLPHE`, 0);
            storage.sort();
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
    },
}
export default storage;