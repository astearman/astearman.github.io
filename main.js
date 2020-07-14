// Price Calculator
const sum = document.getElementById('add');
sum.onclick = calculatePrice;

function calculatePrice() {
    
  let options = document.getElementsByClassName('price');
  let optionsLength = options.length,
  total = 0;
  for (var i = 0; i < optionsLength; ++i) {
    total += parseInt(options[i].value * 1);
      }
  document.getElementById('totalPrice').value = `$${total.toLocaleString()}`;
}