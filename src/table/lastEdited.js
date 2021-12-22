import storage from '../storage/storage.js';
//add a class to recently edited/added items to animate a blinking indicator
let edited = {
    init: (obj) => {
        edited.remove();
        edited.add(obj);
    },
    //change all last edited values to false
    remove: () => {
        for(let i in storage.storage){
            storage.storage[i].lastEdited = false;
        }
    },
    add:(obj) => {
        obj.lastEdited = true;
    },
    //add a last edited to highlight last edited item
    highlight: () => {
        let targetObject = storage.storage.find(x => x.lastEdited);
        if(targetObject){
            let edited = document.getElementById(`${targetObject.id}`);
            edited.classList.add(`last-edited`);
        }
    }
}

export default edited;