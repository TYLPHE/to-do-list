import tag from '../form/tag.js';
import storage from '../storage/storage.js';
import push from './push.js';

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
        tab.addEventListener(`click`, (e) => tabs.tabSwap(e.target.className));
        tab.addEventListener(`click`, (e) => tabs.tabColor(e));
    },
    tabColor: (e) => {
        let bgColor = e.target.style.backgroundColor;
        let table = document.querySelector(`.table`);
        table.style.border = `10px solid ${bgColor}`;
    },
    tabSwap: (targetClass) => {
        //sets active tab. This allows options and submit button to remember the current tab.
        storage.activeTab = targetClass;

        //if 'All' tab is clicked, unhide everything
        if(targetClass == tag.tag1Class){
            push();
            return;
        }

        //hide all and unhide what user clicked. (childNodes are active and live unlike querySelectorAll)
        let table = document.querySelector(`.table`);
        for(let i = 1; i < table.childNodes.length; i++){
            table.childNodes[i].classList.add(`hidden`);
            //tagID and targetID tries to match clicked class name to the stored tag value.
            let tagID = table.childNodes[i].childNodes[1].childNodes[1].id;
            let targetID = `desc-${targetClass}`;
            if(tagID == targetID){
                table.childNodes[i].classList.remove(`hidden`);
            }
        }
    },
};

export default tabs;