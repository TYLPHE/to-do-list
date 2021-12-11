export default function desc(){
    let desc = document.createElement(`div`);
        desc.className = `form-desc`;
    let label = document.createElement(`label`);
        label.textContent = `Description:`;
        label.for = `text`
    let textDiv = document.createElement(`div`);
        textDiv.className = `text-div`
    let textBox = document.createElement(`textarea`);
        textBox.className = `text`;
        textBox.id = `text`;
        textBox.required = true;
        textBox.placeholder = `Get booster shot`;
    let span = document.createElement(`span`);
        span.class = `validity`;
    textDiv.append(textBox, span);
    desc.append(label, textDiv);
    return desc;
}