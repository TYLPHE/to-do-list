import calendar from './calendar.js';
import factory from '../factory.js';
import push from '../push.js';
import storage from '../storage.js';

let form = {
    formDiv: document.createElement(`form`),
    init: () => {
        //create form title
        let title = document.createElement(`div`);
        title.textContent = `Add To Do Item`;
        title.classList.add(`form-title`);
        //add calendar to form
        form.formDiv.id = `form`;
        form.formDiv.append(title, form.desc(), calendar, form.priority(), form.submit());
    },
    desc: () => {
        let desc = document.createElement(`div`);
            desc.className = `desc`;
        let label = document.createElement(`label`);
            label.textContent = `Description:`;
            label.for = `text`
        let textDiv = document.createElement(`div`);
            textDiv.className = `text-div`
        let textBox = document.createElement(`textarea`);
            textBox.className = `text`;
            textBox.id = `text`;
            textBox.required = true;
            textBox.placeholder = `Enter description here.`;
        let span = document.createElement(`span`);
            span.class = `validity`;
        textDiv.append(textBox, span);
        desc.append(label, textDiv);
        return desc;
    },
    priority: () => {
        let priority = document.createElement(`div`);
            priority.className = `priority`;
        let priorityLabel = document.createElement(`label`);
            priorityLabel.for = `priority`;
            priorityLabel.textContent = `Priority: `;
        let radioDiv = document.createElement(`div`);
        let radioButtons = (label) => {
            let pLabel = document.createElement(`label`);
                pLabel.for = label;
                pLabel.className = `radio`;
                pLabel.textContent = label;
            let radio = document.createElement(`input`);
                radio.id = label;
                radio.name = `radio`;
                radio.type = `radio`;
                radio.textContent = label;
            pLabel.appendChild(radio);
            radioDiv.append(pLabel);
        }
        priority.append(priorityLabel, radioDiv);
        radioButtons(`Low`);
        radioButtons(`Medium`);
        radioButtons(`High`);
        return priority;
    },
    submit: () => {
        let submit = document.createElement(`button`);
            submit.className = `submit`;
            submit.textContent = `Submit`;
            submit.classList.add(`submit`);
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
                console.log(due, desc, priority);
                if(due && desc){
                    let submit = factory(due, desc, priority);
                    storage.storage.push(submit);
                    storage.save();
                    push();
                }
                else{console.log(`error`)};
            }
        return submit;
    }
}
form.init();
export default form.formDiv;