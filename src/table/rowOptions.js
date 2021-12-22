import push from './push.js';
import storage from '../storage/storage.js';
import lastEdited from './lastEdited.js';

let options = {
    init: () => {
        options.addButtons();
    },
    addButtons: () => {
        let listLength = document.getElementsByClassName(`list`).length;
        for(let i = 0; i < listLength; i++){
            let optionsDiv = document.querySelector(`.options-${storage.storage[i].id}`);

            let completeButton = document.createElement(`button`);
            let editButton = document.createElement(`button`);
            let deleteButton = document.createElement(`button`);

            completeButton.className = `option-button complete`;
            editButton.className = `option-button edit`;
            deleteButton.className = `option-button delete`;

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
            lastEdited.init(targetObject);
            storage.save();
            push();
        }
        else{
            targetObject.complete = true;
            lastEdited.init(targetObject);
            storage.save();
            push();
        }
    },
    //copy contents of row to form and then delete row
    edit: (e) => {
        let targetObject = e.target.parentNode.parentNode.id;
        let storageObject = storage.storage.find(x => x.id === parseInt(targetObject));

        let due = storageObject.due;
        let desc = storageObject.desc;
        let priority = storageObject.priority;
        let tag = storageObject.tag;

        let dueInput = document.getElementById(`end`);
        dueInput.value = due;
        let textArea = document.getElementById(`text`);
        textArea.defaultValue = desc;
        let priorityInput = document.getElementById(priority);
        priorityInput.checked = true;
        let tagInput = document.getElementById(tag);
        if(tagInput == null){
            console.log(document.querySelector(`tag-color`));
        }
        else{
            tagInput.checked = true;
        }

        options.delete(e);

        let form = document.getElementById(`form`);
        form.classList.add(`last-edited`);
    },
    //delete object from storage and redraw table
    delete: (e) => {
        let targetObject = e.target.parentNode.parentNode.id;
        let storageObject = storage.storage.find(x => x.id === parseInt(targetObject));
        storage.storage.splice(storage.storage.indexOf(storageObject), 1);
        lastEdited.remove();
        storage.save();
        push();
    },
}

export default options.init;