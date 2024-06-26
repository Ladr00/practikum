document.addEventListener("DOMContentLoaded", function() {
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const resultDisplay = document.getElementById('result');
    const extremeMessage = document.getElementById('extreme-message');

    let count = 0;

    function updateDisplay() {
        resultDisplay.textContent = count;
        if (count > 0) {
            resultDisplay.style.backgroundColor = 'yellow';
        } else if (count < 0) {
            resultDisplay.style.backgroundColor = 'green';
        } else {
            resultDisplay.style.backgroundColor = 'red';
        }
        
        if (count === 10 || count === -10) {
            extremeMessage.style.display = 'block';
        } else {
            extremeMessage.style.display = 'none';
        }

        plusButton.disabled = count === 10;
        minusButton.disabled = count === -10;
    }

    minusButton.addEventListener('click', function() {
        count--;
        updateDisplay();
    });

    plusButton.addEventListener('click', function() {
        count++;
        updateDisplay();
    });

    updateDisplay();
});
