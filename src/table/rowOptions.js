import push from './push.js';
import storage from '../storage/storage.js';
let options = {
    init: () => {
        options.addButtons();
    },
    addButtons: () => {
        let listLength = document.getElementsByClassName(`list`).length;
        for(let i = 0; i < listLength; i++){
            let optionsDiv = document.querySelector(`.options-${i+1}`);

            let completeButton = document.createElement(`button`);
            let editButton = document.createElement(`button`);
            let deleteButton = document.createElement(`button`);

            completeButton.className = `complete`;
            editButton.className = `edit`;
            deleteButton.className = `delete`;

            completeButton.textContent = `Complete`;
            editButton.textContent = `Edit`;
            deleteButton.textContent = `Delete`;

            completeButton.addEventListener(`click`, options.complete);
            editButton.addEventListener(`click`, options.edit);
            deleteButton.addEventListener(`click`, options.delete);

            optionsDiv.append(completeButton, editButton, deleteButton);
        }
    },
    complete: (e) => {
        let targetObject = storage.storage.find(x => x.id === parseInt(e.target.parentNode.parentNode.id));
        if(targetObject.complete){
            targetObject.complete = false;
            targetObject.lastEdited = true;
            storage.save();
            push();
        }
        else{
            targetObject.complete = true;
            targetObject.lastEdited = true;
            storage.save();
            push();
        }
    },
    edit: (e) => {
        console.log(e.target.parentNode.parentNode.id);
    },
    delete: (e) => {
        console.log(e.target.parentNode.parentNode.id);
    },
}

export default options.init;