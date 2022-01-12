const tag = {
  tagDiv: document.createElement('div'),
  tag1Color: '#e63946',
  tag1Text: 'All',
  tag1Class: 'tab-1',
  tag2Color: '#f1faee',
  tag2Text: '',
  tag2Class: 'tab-2',
  tag3Color: '#a8dadc',
  tag3Text: '',
  tag3Class: 'tab-3',
  tag4Color: '#457b9d',
  tag4Text: '',
  tag4Class: 'tab-4',
  tag5Color: '#1d3557',
  tag5Text: '',
  tag5Class: 'tab-5',

  init: () => {
    const title = document.createElement('div');
    title.textContent = 'Tag Color:';
    tag.tagDiv.appendChild(title);
    tag.tagDiv.className = 'tag';

    // tag.addTag(tag.tag1Color, tag.tag1Color);
    tag.addTag(tag.tag2Color, tag.tag2Class);
    tag.addTag(tag.tag3Color, tag.tag3Class);
    tag.addTag(tag.tag4Color, tag.tag4Class);
    tag.addTag(tag.tag5Color, tag.tag5Class);
    return tag.tagDiv;
  },

  addTag: (color, value) => {
    const radioDiv = document.createElement('div');
    radioDiv.className = 'tag-div';
    const label = document.createElement('label');
    label.className = 'tag-color';
    label.for = value;
    label.style.backgroundColor = color;
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'tag';
    radio.id = value;
    radio.value = value;
    if (value === tag.tag2Class) {
      radio.defaultChecked = true;
    }

    label.appendChild(radio);
    radioDiv.append(label);
    tag.tagDiv.appendChild(radioDiv);
  },
};

export default tag;
