const tabDetails = {}; // Tab-specific details storage

document.getElementById('addButton').addEventListener('click', function () {
    const activeTab = document.querySelector('.tab.active');
    if (!activeTab) return;

    const tabId = activeTab.dataset.tabId;
    if (!tabDetails[tabId]) {
        tabDetails[tabId] = [];
    }

    const detailFields = document.getElementById('detailFields');

    const fieldGroup = document.createElement('div');
    fieldGroup.className = 'field-group';

    const numberLabel = document.createElement('label');
    numberLabel.textContent = detailFields.children.length + 1;
    fieldGroup.appendChild(numberLabel);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.placeholder = 'Name';
    fieldGroup.appendChild(nameInput);

    const selectorDropdown = document.createElement('select');
    const options = ['Xpath', 'Id', 'CssSelector'];
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        selectorDropdown.appendChild(opt);
    });
    fieldGroup.appendChild(selectorDropdown);

    const valueInput = document.createElement('input');
    valueInput.type = 'text';
    valueInput.name = 'value';
    valueInput.placeholder = 'Value';
    fieldGroup.appendChild(valueInput);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'X';
    removeButton.className = 'remove-btn';
    removeButton.addEventListener('click', function () {
        detailFields.removeChild(fieldGroup);
        tabDetails[tabId] = tabDetails[tabId].filter(fg => fg !== fieldGroup);
        updateNumberLabels();
    });
    fieldGroup.appendChild(removeButton);

    detailFields.appendChild(fieldGroup);
    tabDetails[tabId].push(fieldGroup);

    updateNumberLabels();
});

// Number Label güncellemesi
function updateNumberLabels() {
    const detailFields = document.getElementById('detailFields');
    Array.from(detailFields.children).forEach((fieldGroup, index) => {
        fieldGroup.firstChild.textContent = index + 1;
    });
}

// Display tab-specific details when a tab is selected
export function selectTab(tab) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const tabImage = document.getElementById('tabImage');
    tabImage.src = tab.dataset.image;

    const pageTitle = document.getElementById('pageTitle');
    pageTitle.textContent = tab.dataset.filename;

    const tabDetailWrapper = document.getElementById('tabDetailWrapper');
    tabDetailWrapper.style.display = 'flex'; // Tab seçildiğinde detayları göster

    const detailFields = document.getElementById('detailFields');
    detailFields.innerHTML = ''; // Clear existing fields

    const tabId = tab.dataset.tabId;
    if (tabDetails[tabId]) {
        tabDetails[tabId].forEach(fieldGroup => {
            detailFields.appendChild(fieldGroup);
        });
        updateNumberLabels();
    }
}
