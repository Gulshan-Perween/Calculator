function addToScreen(value) {
  document.getElementById('result').value += value;
}

function clearScreen() {
  document.getElementById('result').value = '';
}

function calculate() {
  const result = document.getElementById('result').value;
  if (result) {
    try {
      const output = eval(result);
      document.getElementById('result').value = output;
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }
}