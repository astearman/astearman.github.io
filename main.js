
const array = [
  "Dynamic", 
  "Stategic", 
  "Resilient", 
  "Influential", 
  "Progressive", 
  "Flexible", 
  "Innovative", 
  "Determined", 
  "Nimble", 
  "Trusting", 
  "Focused", 
  "Stellar"
]

let list = document.getElementById('adjectives');
const last = array.pop();

array.forEach((item) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<li>${item}</li>`;
  list.append(listItem);
});

document.getElementById('last').innerHTML = 'But most importantly, we are ' + '<i>' + last + '</i>' + '&nbsp;' + 'to work for!';