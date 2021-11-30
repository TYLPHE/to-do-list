let calendar = {
    calendarDiv: document.createElement(`div`),
    init: () => {
        calendar.calendarDiv.className = `calendar`;
        calendar.startDate();
        calendar.endDate();        
    },
    startDate: () => {
        let label = document.createElement(`label`);
            label.textContent = `Start (date & time): `;
            label.for = `start`;
        let input = document.createElement(`input`);
            input.type = `datetime-local`;
            input.id = `start`;
            input.required = true;
        //default value to current date and time
            //add a `0` if getMinutes() is < 10 for formatting purposes
        input.value = new Date().toISOString().slice(0,-13) + new Date().getHours() + `:` + (new Date().getMinutes()<10?`0`:``) + new Date().getMinutes();
        //shows check or x icon if all <input> required fields entered 
        let span = document.createElement(`span`);
            span.class = `validity`;
        calendar.calendarDiv.append(label, input, span);
    },
    endDate: () => {
        let label = document.createElement(`label`);
            label.textContent = `End (date & time): `;
            label.for = `end`;
        let input = document.createElement(`input`);
            input.type = `datetime-local`;
            input.id = `end`;
            input.required = true;
        let span = document.createElement(`span`);
            span.class = `validity`;
        calendar.calendarDiv.append(label, input, span);
    }
}
calendar.init();
export default calendar.calendarDiv;