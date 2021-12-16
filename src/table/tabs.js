import tag from '../form/tag.js';

let tabs = {
    tabDiv: document.createElement(`div`),
    init: () => {
        tabs.addTabs(tag.tag1);
        tabs.addTabs(tag.tag2);
        tabs.addTabs(tag.tag3);
        tabs.addTabs(tag.tag4);
        tabs.addTabs(tag.tag5);
    },
    addTabs: (color) => {
        let tab = document.createElement(`div`);
        tab.style.backgroundColor = color;
    },
};

export default tabs;