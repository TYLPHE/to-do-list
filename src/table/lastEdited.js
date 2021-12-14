import storage from '../storage/storage.js';

let edited = {
    remove: () => {
        for(let key in storage.storage){
            console.log(storage.storage[key]);
        }
        console.log()
    },
    add:(obj) => {
        obj.edited = true;
    }
}

export default edited;