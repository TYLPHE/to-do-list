import push from './push';
import storage from '../storage/storage';
import lastEdited from './lastEdited';
import tabs from './tabs';

const options = {
  init: () => {
    options.addButtons();
  },

  addButtons: () => {
    const listLength = document.getElementsByClassName('list').length;
    for (let i = 0; i < listLength; i += 1) {
      const optionsDiv = document.querySelector(
        `.options-${storage.storage[i].id}`
      );

      const completeButton = document.createElement('button');
      completeButton.className = 'option-button complete';
      completeButton.textContent = 'Complete';
      completeButton.addEventListener('click', options.complete);

      const editButton = document.createElement('button');
      editButton.className = 'option-button edit';
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', options.edit);

      const deleteButton = document.createElement('button');
      deleteButton.className = 'option-button delete';
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', options.delete);

      optionsDiv.append(completeButton, editButton, deleteButton);
    }
  },

  complete: (e) => {
    const targetObject = storage.storage.find(
      (x) => x.id === parseInt(e.target.parentNode.parentNode.id, 10)
    );

    if (targetObject.complete) {
      targetObject.complete = false;
      lastEdited.init(targetObject);
      storage.save();
      push();
      tabs.tabSwap(storage.activeTab);
    } else {
      targetObject.complete = true;
      lastEdited.init(targetObject);
      storage.save();
      push();
      tabs.tabSwap(storage.activeTab);
    }
  },

  // copy contents of row to form and then delete row
  edit: (e) => {
    const targetObject = e.target.parentNode.parentNode.id;
    const storageObject = storage.storage.find(
      (x) => x.id === parseInt(targetObject, 10)
    );

    const { due } = storageObject;
    const { desc } = storageObject;
    const { priority } = storageObject;
    const { tag } = storageObject;

    const dueInput = document.getElementById('end');
    dueInput.value = due;
    const textArea = document.getElementById('text');
    textArea.defaultValue = desc;
    const priorityInput = document.getElementById(priority);
    priorityInput.checked = true;
    const tagInput = document.getElementById(tag);
    tagInput.checked = true;
    options.delete(e);
    const form = document.getElementById('form');
    form.classList.add('last-edited');
  },

  // delete object from storage and redraw table
  delete: (e) => {
    const targetObject = e.target.parentNode.parentNode.id;
    const storageObject = storage.storage.find(
      (x) => x.id === parseInt(targetObject, 10)
    );

    storage.storage.splice(storage.storage.indexOf(storageObject), 1);
    lastEdited.remove();
    storage.save();
    push();
    tabs.tabSwap(storage.activeTab);
  },
};

export default options.init;
