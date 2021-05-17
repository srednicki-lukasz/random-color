let hex = '#000000';
let colorCode = document.querySelector('.color-code');

const preview = document.querySelector('.preview');
const btnCopyCss = document.querySelector('.copy-css');
const btnCopyHex = document.querySelector('.copy-hex');

// change background color
preview.addEventListener('click', () => {
    hex = '#';
    const chars = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    for (let i = 0; i < 6; i++) {
        hex += chars[Math.floor(Math.random() * chars.length)];
    }

    colorCode.value = hex;
    preview.style.background = hex;
});

// copy to clipboard
btnCopyCss.addEventListener('click', () => {
    let input = document.createElement('input');
    input.value = `background-color: ${hex}`;
    document.body.appendChild(input);
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('CSS code copied!');
});

btnCopyHex.addEventListener('click', () => {
    colorCode.select();
    colorCode.setSelectionRange(0, 99999);
    document.execCommand('copy');
    colorCode.setSelectionRange(0, 0)
    alert('Hex code copied!');
});