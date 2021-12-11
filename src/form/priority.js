export default function priority(){
    let priority = document.createElement(`div`);
        priority.className = `form-priority`;
    let priorityLabel = document.createElement(`label`);
        priorityLabel.for = `priority`;
        priorityLabel.textContent = `Priority: `;
    let radioDiv = document.createElement(`div`);
    let radioButtons = (label) => {
        let pLabel = document.createElement(`label`);
            pLabel.for = label;
            pLabel.className = `radio ${label}`;
            pLabel.textContent = label;
        let radio = document.createElement(`input`);
            radio.id = label;
            radio.name = `radio`;
            radio.type = `radio`;
            radio.textContent = label;
            //check `Medium` by default to prevent blank priorities.
            if(label == `Medium`) 
                radio.defaultChecked = true;
        pLabel.appendChild(radio);
        radioDiv.append(pLabel);
    }
    priority.append(priorityLabel, radioDiv);
    radioButtons(`Low`);
    radioButtons(`Medium`);
    radioButtons(`High`);
    return priority;
}