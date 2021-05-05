let hex = '#000000';
let colorCode = document.querySelector('.color-code');

const preview = document.querySelector('.preview');
const btnCopyCss = document.querySelector('.show-css');
const btnCopyHex = document.querySelector('.copy-hex');

preview.addEventListener('click', () => {
    hex = '#';
    const chars = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    for (let i = 0; i < 6; i++) {
        hex += chars[Math.floor(Math.random() * chars.length)];
    }

    colorCode.value = hex;
    preview.style.background = hex;
});