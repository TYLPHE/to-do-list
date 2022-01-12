import storage from '../storage/storage';

// add a class to recently edited/added items to animate a blinking indicator
const edited = {
  init: (obj) => {
    edited.remove();
    edited.add(obj);
  },

  // change all last edited values to false
  remove: () => {
    for (let i = 0; i < storage.storage.length; i += 1) {
      storage.storage[i].lastEdited = false;
    }
  },

  add: (obj) => {
    const updateEdit = obj;
    updateEdit.lastEdited = true;
  },

  // add a last edited to highlight last edited item
  highlight: () => {
    const targetObject = storage.storage.find((x) => x.lastEdited);
    if (targetObject) {
      const edit = document.getElementById(`${targetObject.id}`);
      edit.classList.add('last-edited');
    }
  },
};
export default edited;
