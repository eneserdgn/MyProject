import { addTab, selectTab } from './tabs.js';

// Sol scroll butonuna tıklama olayı
document.getElementById('scrollLeftButton').addEventListener('click', function () {
    document.getElementById('tablist').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

// Sağ scroll butonuna tıklama olayı
document.getElementById('scrollRightButton').addEventListener('click', function () {
    document.getElementById('tablist').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});
