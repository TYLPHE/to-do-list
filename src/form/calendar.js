let calendar = {
    calendarDiv: document.createElement(`div`),
    init: () => {
        calendar.calendarDiv.className = `calendar`;
        calendar.due();        
    },
    due: () => {
        let label = document.createElement(`label`);
        label.textContent = `Due: `;
        label.for = `end`;
        let input = document.createElement(`input`);
        input.type = `datetime-local`;
        input.autocomplete = 'on'
        input.id = `end`;
        input.value = calendar.currentTime();
        //shows check or x icon if all <input> required fields entered 
        let span = document.createElement(`span`);
        span.class = `validity`;
        calendar.calendarDiv.append(label, input, span);
    },
    currentTime: () => {
        let currentYear = new Date().getFullYear();
        let currentMonth = (new Date().getMonth() + 1 < 10 ? `0` : ``) + (new Date().getMonth() + 1).toString();
        let currentDate = (new Date().getDate() < 10 ? `0` : ``) + new Date().getDate().toString();
        let currentHour = (new Date().getHours() == 0 ? `12`: (new Date().getHours() < 10 ? `0` : ``)) + new Date().getHours().toString();
        let currentMinute = (new Date().getMinutes() < 10 ? `0` : ``) + new Date().getMinutes().toString();
        return `${currentYear}-${currentMonth}-${currentDate}T${currentHour}:${currentMinute}`;
    }
}
calendar.init();
export default calendar;