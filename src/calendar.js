let calendar = {
    calendarDiv: document.createElement(`div`),
    startDate: () => {
        let label = document.createElement(`label`);
        label.textContent = `Start date & time: `;
        label.for = `start`
        let input = document.createElement(`input`);
        input.type = `datetime-local`;
        input.id = `start`;
        input.required = true;

        //default value to current date and time
        input.value = new Date().toISOString().slice(0,-13) + new Date().getHours() + `:` + new Date().getMinutes();

        //shows check or x icon if all <input> required fields entered 
        let span = document.createElement(`span`);
        span.class = `validity`;

        return this.calendarDiv.append(label, input, span);
    },
    endDate: () => {
        let label = document.createElement(`label`);
        label.textContent = `End date & time: `;
        label.for = `end`
        let input = document.createElement(`input`);
        input.type = `datetime-local`;
        input.id = `end`;
        input.required = true;
        let span = document.createElement(`span`);
        span.class = `validity`;
        return this.calendarDiv.append(label, input, span);
    }
}

export default calendar.calendarDiv;