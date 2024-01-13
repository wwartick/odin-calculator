const gridButtons = document.querySelectorAll('.gridBtn');
const deleteButtons = document.querySelectorAll('.eraserBtn');
const bottomText = document.querySelector('.currentFunction');
const topText = document.querySelector('.previousResult');
let inputOne ='';
let inputTwo = '';
let operation = '';

const showResults = function(functionAnswer){
    if (functionAnswer == 'u broke me wtf'){
        bottomText.textContent=functionAnswer;
        inputOne = 0;
        inputTwo = '';
        operation = '';
    }else {
    bottomText.textContent=functionAnswer;
     inputOne = functionAnswer;
     inputTwo = '';
     operation = '';
    }
}

const doTheMath = function(valueOne, valueTwo, selectedOperation) {
    const intOne = parseFloat(valueOne);
    const intTwo = parseFloat(valueTwo);

    let result;
    
    switch (selectedOperation) {
        case '+':
            result = intOne + intTwo;
            break;
        case '-':
            result = intOne - intTwo;
            break;
        case 'x':
            result = intOne * intTwo;
            break;
        case '÷':
            if (intTwo === 0) {
                showResults('u broke me wtf');
                return;
            }
            result = intOne / intTwo;
            break;
    }

    const formattedResult = result % 1 === 0 ? result.toFixed(0) : result.toFixed(3);

    showResults(formattedResult);
}

const deleteFunction = function(deleter){
    if (deleter === 'clear'){
        inputOne = '';
        inputTwo = '';
        operation = '';
        topText.textContent = '';
        bottomText.textContent = '';
    } else if (deleter === 'delete') {
        if (operation === '') {
            inputOne = inputOne.slice(0, -1);
        } else {
            inputTwo = inputTwo.slice(0, -1);
        }
    }
    topText.textContent = (inputOne + ' ' + operation + ' ' + inputTwo);
}

const inputFunction = function(selectedButton) {
    const operators = ['+', '-', '÷', 'x', '='];

    if (selectedButton === '.' && (inputOne.includes('.') || inputTwo.includes('.'))) {
        return;
    }

    if (operation === '') {
        if (operators.includes(selectedButton) && inputOne === '') {

        } else if (!operators.includes(selectedButton)) {
            inputOne += selectedButton;
        } else if (operators.includes(selectedButton) && selectedButton !== '=') {
            operation = selectedButton;
        }

    }

    if (operation !== '' && inputOne !== '') {
        if (operators.includes(selectedButton) && inputTwo === '') {
        } else if (!operators.includes(selectedButton)) {
            inputTwo += selectedButton;
        } else if (operators.includes(selectedButton)) {
            doTheMath(inputOne, inputTwo, operation);
            if (selectedButton !== '=') {
                operation = selectedButton;
            }
        }
    }

    topText.textContent = (inputOne + ' ' + operation + ' ' + inputTwo);
}
gridButtons.forEach(button => {
    button.addEventListener('click', () => {
        inputFunction(button.id);
    });
});
deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        deleteFunction(button.id);
    });
});