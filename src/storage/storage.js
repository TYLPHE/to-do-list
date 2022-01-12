import factory from './factory';

const storage = {
  // id assigns each list a unique id#... not really using it but just in case.
  id: 0,

  // all lists are stored in storage[]
  storage: [],

  // active tab remembers which tab is active to filter out the correct list
  // available tab options: tab-1, tab-2, ...tab-5
  activeTab: 'tab-1',

  // create a localStorage file if none exists, otherwise load it.
  getset: () => {
    if (localStorage.getItem('todo-TYLPHE') == null) {
      // set a file for to do items
      localStorage.setItem('todo-TYLPHE', []);

      // prepopulate some items and push it to table
      const currentYear = new Date().getFullYear();
      let currentMonth;
      if (new Date().getMonth() + 1 < 10) {
        currentMonth = `0${(new Date().getMonth() + 1)}`;
      } else {
        currentMonth = (new Date().getMonth() + 1);
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

      const soon = `${currentYear}-${currentMonth}-${currentDate}T${currentHour}:59`;
      const soon1 = `${currentYear}-${currentMonth}-${currentDate}T${currentHour}:51`;
      const soon2 = `${currentYear}-${currentMonth}-${currentDate}T${currentHour}:05`;
      const tomorrow = `${currentYear}-${currentMonth}-28T12:00`;
      const tomorrow1 = `${currentYear}-${currentMonth}-28T13:00`;
      const overdue = `${currentYear}-01-01T${currentHour}:${currentMinute}`;
      const overdue1 = `${currentYear}-12-24T${currentHour}:${currentMinute}`;
      const schedule1 = factory(tomorrow, 'Car maintenance', 'High', 'tab-2');
      const schedule2 = factory(soon, 'Laundry', 'Low', 'tab-3');
      const schedule3 = factory(overdue, 'Party', 'Medium', 'tab-4');
      const schedule4 = factory(soon2, 'Drink water', 'Medium', 'tab-5');
      const schedule5 = factory(tomorrow1, 'Pay bills', 'High', 'tab-2');
      const schedule6 = factory(soon1, 'Scrub bathroom', 'Low', 'tab-3');
      const schedule7 = factory(overdue1, 'Buy food', 'Medium', 'tab-4');
      storage.storage.push(schedule1);
      storage.storage.push(schedule2);
      storage.storage.push(schedule3);
      storage.storage.push(schedule4);
      storage.storage.push(schedule5);
      storage.storage.push(schedule6);
      storage.storage.push(schedule7);

      // create another file to remember ID number for generation
      localStorage.setItem('todo-id-TYLPHE', 0);
      storage.sort();
      storage.save();
    } else {
      const save = localStorage.getItem('todo-TYLPHE');
      storage.storage = JSON.parse(save);

      const id = localStorage.getItem('todo-id-TYLPHE');
      storage.id = JSON.parse(id);
    }
  },

  save: () => {
    const save = JSON.stringify(storage.storage);
    const id = JSON.stringify(storage.id);
    localStorage.setItem('todo-TYLPHE', save);
    localStorage.setItem('todo-id-TYLPHE', id);
  },

  sort: () => {
    storage.storage.sort(
      (a, b) => {
        if (a.due < b.due) {
          return -1;
        }
        if (a.due > b.due) {
          return 1;
        }
        return 0;
      },
    );
  },
};

export default storage;
