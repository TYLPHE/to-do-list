import tag from '../form/tag.js';

let tabs = {
    tabDiv: document.createElement(`div`),
    init: () => {
        tabs.tabDiv.className = `tab-div`;
        tabs.addTab(tag.tag1Color, tag.tag1Text, tag.tag1Class);
        tabs.addTab(tag.tag2Color, tag.tag2Text, tag.tag2Class);
        tabs.addTab(tag.tag3Color, tag.tag3Text, tag.tag3Class);
        tabs.addTab(tag.tag4Color, tag.tag4Text, tag.tag4Class);
        tabs.addTab(tag.tag5Color, tag.tag5Text, tag.tag5Class);
        return tabs.tabDiv;
    },
    addTab: (color, text, label) => {
        let tab = document.createElement(`div`);
        tab.className = label;
        tab.textContent = text;
        tab.style.backgroundColor = color;
        tabs.tabDiv.appendChild(tab);
        tab.addEventListener(`click`, (e) => tabs.tabSwap(e));
    },
    tabSwap: (e) => {
        let bgColor = e.target.style.backgroundColor;
        let table = document.querySelector(`.table`);
        table.style.border = `10px solid ${bgColor}`;
        //updating childNodes will update live. hide all and unhide what we need.
        console.log(table.childNodes);
        for(let i = 1; i < table.childNodes.length; i++){
            table.childNodes[i].classList.add(`hidden`);
        }
        console.log(table.childNodes);
        //search and unhide the tag clicked
        let tagParent = document.querySelector(`#desc-${e.target.className}`).parentElement.parentElement
        while(tagParent.classList.contains(`hidden`)){
            tagParent.classList.remove(`hidden`);
        }
        console.log(document.querySelectorAll(`.hidden`));
    }
};

export default tabs;