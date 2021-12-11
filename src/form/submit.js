import factory from '../storage/factory.js';
import storage from '../storage/storage.js';
import push from '../table/push.js';
let submit = {
    submit: () => {
        let submit = document.createElement(`button`);
            submit.className = `submit`;
            submit.textContent = `Submit`;
            submit.formTarget = `_parent`;
            submit.onsubmit = `return false`;
            submit.onclick = (e) => {
                e.preventDefault();
                let due = document.getElementById(`end`).value;
                let desc = document.getElementById(`text`).value;
                let priority = ``; 
                    if(document.querySelector(`input[name="radio"]:checked`) == null){
                        priority = ` `;
                    }
                    else{
                        priority = document.querySelector(`input[name="radio"]:checked`).id;
                    }
                if(due && desc){
                    let submit = factory(due, desc, priority);
                    storage.storage.push(submit);
                    storage.sort();
                    storage.save();
                    push();
                }
                else{console.log(`error`)};
            }
        return submit;
    }  
}

export default submit;