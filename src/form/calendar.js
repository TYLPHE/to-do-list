const calendar = {
  calendarDiv: document.createElement('div'),

  init: () => {
    calendar.calendarDiv.className = 'calendar';
    calendar.due();
  },

  due: () => {
    const label = document.createElement('label');
    label.textContent = 'Due: ';
    label.for = 'end';
    const input = document.createElement('input');
    input.type = 'datetime-local';
    input.autocompconste = 'on';
    input.id = 'end';
    input.value = calendar.currentTime();

    // shows check or x icon if all <input> required fields entered
    const span = document.createElement('span');
    span.class = 'validity';
    calendar.calendarDiv.append(label, input, span);
  },

  currentTime: () => {
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

    let currentHour;
    if (new Date().getHours() === 0) {
      currentHour = '12';
    } else if (new Date().getHours() < 10) {
      currentHour = `0${new Date().getHours()}`;
    } else {
      currentHour = new Date().getHours();
    }

    let currentMinute;
    if (new Date().getMinutes() < 10) {
      currentMinute = `0${new Date().getMinutes()}`;
    } else {
      currentMinute = new Date().getMinutes();
    }

    return `${currentYear}-${currentMonth}-${currentDate}T${currentHour}:${currentMinute}`;
  },
};
calendar.init();
export default calendar;
