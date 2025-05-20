// get Html tag's inner text
function getTextValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

// get Input Field Value
function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}
