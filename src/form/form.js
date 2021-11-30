import calendar from './calendar.js';

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
        let textBox = document.createElement(`textarea`);
            textBox.className = `text`;
            textBox.required = true;
            textBox.placeholder = `Enter description here.`;
        let span = document.createElement(`span`);
            span.class = `validity`;
        desc.append(textBox, span);
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
        return submit;
    }

}
form.init();
export default form.formDiv;