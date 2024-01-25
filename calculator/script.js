let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for (let button of buttons) {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        switch (buttonText) {
            case '×':
                buttonText = '*';
                break;
            case '–':
                buttonText = '-';
                break;
            case '÷':
                buttonText = '/';
                break;
            case '%':
                buttonText = '/100';
                break;
            case 'C':
                screenValue = '';
                break;
            case '=':
                try {
                    screenValue = eval(screenValue);
                } catch (error) {
                    screenValue = 'Error';
                }
                break;
            default:
                break;
        }

        if (buttonText !== '=' && buttonText !== 'C') {
            screenValue += buttonText;
        }

        screen.value = screenValue;
    });
}
