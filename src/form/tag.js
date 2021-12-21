let tag = {
    tagDiv: document.createElement(`div`),
    tag1Color: `#e63946`,
    tag1Text: `All`,
    tag1Class: `tab-1`,

    tag2Color: `#f1faee`,
    tag2Text: ``,
    tag2Class: `tab-2`,

    tag3Color: `#a8dadc`,
    tag3Text: ``,
    tag3Class: `tab-3`,

    tag4Color: `#457b9d`,
    tag4Text: ``,
    tag4Class: `tab-4`,

    tag5Color: `#1d3557`,
    tag5Text: ``,
    tag5Class: `tab-5`,

    init: () => {
        let title = document.createElement(`div`);
        title.textContent = `Tag Color:`
        tag.tagDiv.appendChild(title);
        tag.tagDiv.className = `tag`;
        // tag.addTag(tag.tag1Color, tag.tag1Color);
        tag.addTag(tag.tag2Color, tag.tag2Class);
        tag.addTag(tag.tag3Color, tag.tag3Class);
        tag.addTag(tag.tag4Color, tag.tag4Class);
        tag.addTag(tag.tag5Color, tag.tag5Class);
        return tag.tagDiv;
    },
    addTag: (color, value) => {
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
        checkbox.value = value;
        label.appendChild(checkbox);
        checkboxDiv.append(label);
        tag.tagDiv.appendChild(checkboxDiv);
    },
};

export default tag;