import calendar from './calendar.js';
import desc from './desc.js';
import submit from './submit.js';
import priority from './priority.js';

let form = {
    formDiv: document.createElement(`form`),
    init: () => {
        //create form title
        let title = document.createElement(`div`);
        title.textContent = `Add To Do Item`;
        title.classList.add(`form-title`);
        //add calendar to form
        form.formDiv.id = `form`;
        form.formDiv.append(title, desc(), calendar, priority(), submit.submit());
    },
}
form.init();
export default form.formDiv;