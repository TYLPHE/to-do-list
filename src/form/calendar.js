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
            //default value to current date and time
            // also add a `0` if getMinutes() is < 10 for formatting purposes
            input.value = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}T` + (new Date().getHours()==0?`12`:(new Date().getHours()<10?`0`:``) + new Date().getHours() + `:` + (new Date().getMinutes()<10?`0`:``) + new Date().getMinutes());
            input.required = true;
        //shows check or x icon if all <input> required fields entered 
        let span = document.createElement(`span`);
            span.class = `validity`;
        calendar.calendarDiv.append(label, input, span);
    }
}
calendar.init();
export default calendar.calendarDiv;