import { addTab } from './tabs.js';

// Dosya yükleme butonuna tıklama olayı kaldırıldı

// Dosya seçme olayı
document.getElementById('fileInput').addEventListener('change', function () {
    const files = this.files;
    if (files.length > 0) {
        const tablistContainer = document.getElementById('tablistContainer');
        tablistContainer.style.display = 'flex';

        Array.from(files).forEach((file) => {
            const reader = new FileReader();
            reader.onload = function (e) {
                const filenameWithoutExtension = file.name.split('.').slice(0, -1).join('.');
                addTab(filenameWithoutExtension, e.target.result);
            };
            reader.readAsDataURL(file);
        });
    }
});
