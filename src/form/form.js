import calendar from './calendar';
import description from './description';
import submit from './submit';
import priority from './priority';
import tag from './tag';

const form = {
  formDiv: document.createElement('form'),

  init: () => {
    const title = document.createElement('div');
    title.textContent = 'Add To Do Item';
    title.classList.add('form-title');
    form.formDiv.id = 'form';
    form.formDiv.append(
      title,
      description(),
      calendar.calendarDiv,
      priority(),
      tag.init(),
      submit.submit()
    );
  },
};

form.init();
export default form.formDiv;
