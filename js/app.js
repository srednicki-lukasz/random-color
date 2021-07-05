// Set initial values.
window.onload = () => document.querySelector('.color').value = '#FFFFFF';

class RandomColor {

    /**
     * Color.
     * Initial - #FFFFFF
     * @memberof RandomColor
     */
    color = '#FFFFFF';

    constructor() {}

    /**
     * Generate random color.
     * @memberof RandomColor
     */
    generateRandomColor() {
        this.color = '#';

        const availableCharacters = [
            'A', 'B', 'C', 'D', 'E', 'F',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
        ];

        for (let i = 0; i < 6; i++) {
            this.color += availableCharacters[
                Math.floor(Math.random() * availableCharacters.length)
            ];
        }

        return this.color;
    }

    /**
     * Copy CSS code.
     * @memberof RandomColor
     */
    copyCSS() {
        const input = document.createElement('input');

        input.value = `background-color: ${this.color};`;
        document.body.appendChild(input);

        input.select();
        input.setSelectionRange(0, 99999);

        document.execCommand('copy');
        document.body.removeChild(input);

        alert('CSS code copied!');
    }
}

const randomColor = new RandomColor();

document.querySelector('main').addEventListener('click', () => {
    const color = randomColor.generateRandomColor();

    document.querySelector('.color').value = color;

    document.querySelector('main').style.backgroundColor = `${color}`;
});

document.querySelector('.btn-copy-css').addEventListener('click', () => randomColor.copyCSS());
