
// Adjective Array

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

const last = array.pop();
const list = array.join("<p>");

document.getElementById('adjectives').innerHTML = list;
document.getElementById('last').innerHTML = 'But most importantly, we are ' + '<i>' + last + '</i>' + '&ensp;' + 'to work for!';