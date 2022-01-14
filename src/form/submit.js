import factory from '../storage/factory';
import storage from '../storage/storage';
import push from '../table/push';
import lastEdited from '../table/lastEdited';
import tabs from '../table/tabs';

const submit = {
  submit: () => {
    const submitDiv = document.createElement('button');
    submitDiv.className = 'submit';
    submitDiv.textContent = 'Submit';
    submitDiv.formTarget = '_parent';
    submitDiv.onsubmit = 'return false';
    submitDiv.onclick = (e) => {
      e.preventDefault();
      const due = document.getElementById('end').value;
      let desc = document.getElementById('text').value;

      let priority;
      if (document.querySelector('input[name="radio"]:checked') == null) {
        priority = ' ';
      } else {
        priority = document.querySelector('input[name="radio"]:checked').id;
      }

      let tag = '';
      if (document.querySelector('input[name="tag"]:checked') == null) {
        tag = '';
      } else {
        tag = document.querySelector('input[name="tag"]:checked').value;
      }

      if (due && desc) {
        const form = document.getElementById('form');
        if (form.className === 'last-edited') {
          form.className = '';
        }

        const saveMe = factory(due, desc, priority, tag);
        storage.storage.push(saveMe);
        storage.sort();
        storage.save();
        lastEdited.init(saveMe);
        push();
        tabs.tabSwap(storage.activeTab);
      }
    };
    return submitDiv;
  },
};
export default submit;
