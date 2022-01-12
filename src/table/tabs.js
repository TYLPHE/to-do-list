import tag from '../form/tag';
import storage from '../storage/storage';
import push from './push';

const tabs = {
  tabDiv: document.createElement('div'),
  init: () => {
    tabs.tabDiv.className = 'tab-div';
    tabs.addTab(tag.tag1Color, tag.tag1Text, tag.tag1Class);
    tabs.addTab(tag.tag2Color, tag.tag2Text, tag.tag2Class);
    tabs.addTab(tag.tag3Color, tag.tag3Text, tag.tag3Class);
    tabs.addTab(tag.tag4Color, tag.tag4Text, tag.tag4Class);
    tabs.addTab(tag.tag5Color, tag.tag5Text, tag.tag5Class);
    return tabs.tabDiv;
  },

  addTab: (color, text, label) => {
    const tab = document.createElement('div');
    tab.className = label;
    tab.textContent = text;
    tab.style.backgroundColor = color;
    tabs.tabDiv.appendChild(tab);
    tab.addEventListener('click', (e) => tabs.tabSwap(e.target.className));
    tab.addEventListener('click', (e) => tabs.tabColor(e));
  },

  tabColor: (e) => {
    const bgColor = e.target.style.backgroundColor;
    const table = document.querySelector('.table');
    table.style.border = `10px solid ${bgColor}`;
  },

  tabSwap: (targetClass) => {
    // allows options and submit button to remember the current tab.
    storage.activeTab = targetClass;

    // if 'All' tab is clicked, unhide everything
    if (targetClass === tag.tag1Class) {
      push();
      return;
    }

    // hide all and unhide what user clicked.
    // (childNodes are active and live unlike querySelectorAll)
    const table = document.querySelector('.table');
    for (let i = 1; i < table.childNodes.length; i += 1) {
      table.childNodes[i].classList.add('hidden');

      // tagID and targetID tries to match clicked class name to the stored tag.
      // unhide the matched values
      const tagID = table.childNodes[i].childNodes[1].childNodes[1].id;
      const targetID = `desc-${targetClass}`;
      if (tagID === targetID) {
        table.childNodes[i].classList.remove('hidden');
      }
    }
  },
};

export default tabs;
