let tag = {
    tagDiv: document.createElement(`div`),
    tag1: `#e63946`,
    tag2: `#f1faee`,
    tag3: `#a8dadc`,
    tag4: `#457b9d`,
    tag5: `#1d3557`,
    init: () => {
        let title = document.createElement(`div`);
        title.textContent = `Tag Color:`
        tag.tagDiv.appendChild(title);
        tag.tagDiv.className = `tag`;
        tag.addTag(tag.tag1);
        tag.addTag(tag.tag2);
        tag.addTag(tag.tag3);
        tag.addTag(tag.tag4);
        tag.addTag(tag.tag5);
        return tag.tagDiv;
    },
    addTag: (color) => {
        let checkboxDiv = document.createElement(`div`);
        checkboxDiv.className = `tag-div`;
        let label = document.createElement(`label`);
        label.className = `tag-color`;
        label.for = color;
        label.style.backgroundColor = color;
        let checkbox = document.createElement(`input`);
        checkbox.type = `checkbox`;
        checkbox.name = `tag`;
        checkbox.id = color;
        label.appendChild(checkbox);
        checkboxDiv.append(label);
        tag.tagDiv.appendChild(checkboxDiv);
    },
};

export default tag;