let result = '0';

function appendToResult(value) {
    if (result === '0' && value !== '.') {
        result = '';
    }
    result += value;
    document.getElementById('result').innerText = result;
}

function calculateResult() {
    try {
        result = eval(result).toString();
        document.getElementById('result').innerText = result;
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
        result = '0';
    }
}

function clearResult() {
    result = '0';
    document.getElementById('result').innerText = result;
}