import calendar from './calendar.js';
import desc from './desc.js';
import submit from './submit.js';
import priority from './priority.js';
import tag from './tag.js';

let form = {
    formDiv: document.createElement(`form`),
    init: () => {
        let title = document.createElement(`div`);
        title.textContent = `Add To Do Item`;
        title.classList.add(`form-title`);
        form.formDiv.id = `form`;
        form.formDiv.append(title, desc(), calendar, priority(), tag.init(), submit.submit());
    },
}
form.init();
export default form.formDiv;