import { selectTab } from './details.js';

let tabCounter = 0; // Unique ID counter for tabs

export function addTab(filename, dataUrl) {
    const tabList = document.getElementById('tablist');
    const tab = document.createElement('div');
    tab.className = 'tab';

    const tabId = `tab-${tabCounter++}`;
    tab.dataset.tabId = tabId;

    const tabInput = document.createElement('input');
    tabInput.type = 'text';
    tabInput.value = filename;
    tabInput.addEventListener('change', () => {
        updateTabName(tab, tabInput.value);
    });
    tab.appendChild(tabInput);
    tab.dataset.image = dataUrl;
    tab.dataset.filename = filename;
    tab.addEventListener('click', () => {
        selectTab(tab);
    });
    tabList.appendChild(tab);

    if (tabList.children.length === 1) {
        selectTab(tab);
    }

    // Show tablistContainer when a tab is added
    document.getElementById('tablistContainer').style.display = 'flex';
    document.getElementById('tabDetailWrapper').style.display = 'flex';
}

function updateTabName(tab, newName) {
    tab.dataset.filename = newName;
    if (tab.classList.contains('active')) {
        document.getElementById('pageTitle').textContent = newName;
    }
}
