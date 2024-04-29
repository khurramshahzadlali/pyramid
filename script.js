const form = document.getElementById('pattern-form');
const output = document.getElementById('output');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const character = document.getElementById('character').value;
  const count = parseInt(document.getElementById('count').value);
  const inverted = document.getElementById('inverted').checked;

  const rows = [];
  for (let i = 1; i <= count; i++) {
    if (inverted) {
      rows.unshift(padRow(i, count, character)); // Prepend for inverted pattern
    } else {
      rows.push(padRow(i, count, character));  // Append for normal pattern
    }
  }

  let result = '';
  for (const row of rows) {
    result += row + '\n';
  }

  output.textContent = result;
});

function padRow(rowNumber, rowCount, char = '#') {
  const padding = ' '.repeat(rowCount - rowNumber);
  const repeatChar = char.repeat(2 * rowNumber - 1);
  return padding + repeatChar + padding;
                                 }
