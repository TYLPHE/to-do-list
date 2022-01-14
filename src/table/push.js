import storage from '../storage/storage';
import options from './rowOptions';
import lastEdited from './lastEdited';
import tag from '../form/tag';
import calendar from '../form/calendar';

// push populates table
const push = {
  init: () => {
    push.removeRows();
    push.addRows();
    options();
    lastEdited.highlight();
  },

  // remove all the rows in table
  removeRows: () => {
    while (document.querySelector('.list')) {
      document
        .querySelector('.table')
        .removeChild(document.querySelector('.list'));
    }
  },

  // read storage array and append rows to page
  addRows: () => {
    for (let i = 0; i < storage.storage.length; i += 1) {
      const row = document.createElement('tr');
      row.classList.add('list');
      const due = document.createElement('td');
      const desc = document.createElement('td');
      const priority = document.createElement('td');
      const optionsDiv = document.createElement('td');
      due.className = `due-${storage.storage[i].id} due`;
      desc.className = `desc-${storage.storage[i].id} desc`;
      priority.className = `priority-${storage.storage[i].id} priority`;
      optionsDiv.className = `options-${storage.storage[i].id} options`;
      due.innerText = push.dateSplitter(i);
      desc.textContent = storage.storage[i].desc;
      priority.textContent = storage.storage[i].priority;
      row.append(due, desc, priority, optionsDiv);
      row.id = storage.storage[i].id;
      const table = document.querySelector('.table');
      table.appendChild(row);

      // add a tag to the description div
      desc.appendChild(push.addTag(i));

      // search array for overdue tasks and mark them red and overdue
      push.overdue(row, due, i);

      // search array for completed items and cross them out
      push.markcomplete(row, due, desc, i);
    }
  },

  // convert the Date().toISOString() to a more friendly format
  dateSplitter: (i) => {
    const currentYear = new Date().getFullYear();
    let currentMonth;
    if (new Date().getMonth() + 1 < 10) {
      currentMonth = `0${new Date().getMonth() + 1}`;
    } else {
      currentMonth = new Date().getMonth() + 1;
    }

    let currentDate;
    if (new Date().getDate() < 10) {
      currentDate = `0${new Date().getDate()}`;
    } else {
      currentDate = new Date().getDate();
    }

    const today = `${currentYear}-${currentMonth}-${currentDate}`;

    // slice out date from time
    let date = storage.storage[i].due;
    date = date.slice(0, 10);

    // flip yyyy-dd-mm to mm-dd-yyyy lol
    const dd = date.slice(8);
    const mm = date.slice(5, 7);
    const yy = date.slice(0, 4);
    const formatDate = `${mm}-${dd}-${yy}`;

    // slice out time from date
    let time = storage.storage[i].due;
    time = time.slice(11);
    const convertedTime = push.convert24to12(time);

    // omit date if due today
    if (today === date) {
      return convertedTime;
    }

    return `${formatDate}\n${convertedTime}`;
  },

  // add overdue div if time is over now
  overdue: (row, due, i) => {
    const now = calendar.currentTime();
    const date = storage.storage[i].due;
    const compare = push.compare(date, now);
    if (compare <= 0) {
      row.classList.add('overdue');
      const overdue = document.createElement('div');
      overdue.textContent = '(Overdue)';
      due.appendChild(overdue);
    }
  },

  // change time format to AM/PM
  convert24to12: (time) => {
    let hh = time.slice(0, 2);
    const mm = time.slice(3);
    if (hh - 12 > 0) {
      hh -= 12;
      return `${hh}:${mm} PM`;
    }
    if (hh - 12 === 0) {
      return `12:${mm} PM`;
    }
    if (hh === 0) {
      return `12:${mm} AM`;
    }

    return `${hh - 0}:${mm} AM`;
  },

  // compare date values for overdue function
  compare: (date, now) => {
    const compare = date.localeCompare(now);
    return compare;
  },

  // cross out completed items
  markcomplete: (row, due, desc, i) => {
    if (storage.storage[i].complete) {
      // remove the overdue text
      if (due.lastChild.textContent === '(Overdue)') {
        due.removeChild(due.lastChild);
      }
      // remove the red overdue class
      if (row.classList.contains('overdue')) {
        row.classList.remove('overdue');
      }
      desc.classList.add('completed');
      const complete = document.createElement('div');
      complete.textContent = '(Complete)';
      due.appendChild(complete);
      row.classList.add('completed');
    }
  },

  // add tag color to description box
  addTag: (i) => {
    const tagDiv = document.createElement('div');
    tagDiv.classList.add('table-tag');

    if (storage.storage[i].tag === tag.tag2Class) {
      tagDiv.id = `desc-${tag.tag2Class}`;
      tagDiv.style.backgroundColor = tag.tag2Color;
      return tagDiv;
    }

    if (storage.storage[i].tag === tag.tag3Class) {
      tagDiv.id = `desc-${tag.tag3Class}`;
      tagDiv.style.backgroundColor = tag.tag3Color;
      return tagDiv;
    }

    if (storage.storage[i].tag === tag.tag4Class) {
      tagDiv.id = `desc-${tag.tag4Class}`;
      tagDiv.style.backgroundColor = tag.tag4Color;
      return tagDiv;
    }

    if (storage.storage[i].tag === tag.tag5Class) {
      tagDiv.id = `desc-${tag.tag5Class}`;
      tagDiv.style.backgroundColor = tag.tag5Color;
      return tagDiv;
    }
    return tagDiv;
  },
};
export default push.init;
