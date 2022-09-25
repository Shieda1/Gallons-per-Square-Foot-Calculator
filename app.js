// https://www.omnicalculator.com/construction/gallons-per-square-foot

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const gallonspersquarefootRadio = document.getElementById('gallonspersquarefootRadio');
const heightRadio = document.getElementById('heightRadio');

let gallonspersquarefoot;
let height = v; 

// labels of the inpust
const variable = document.getElementById('variable');

gallonspersquarefootRadio.addEventListener('click', function() {
  variable.textContent = 'Height';
  height = v;
  result.textContent = '';
});

heightRadio.addEventListener('click', function() {
  variable.textContent = 'Gallons per square foot';
  gallonspersquarefoot = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(gallonspersquarefootRadio.checked)
    result.textContent = `Gallons per square foot = ${computegallonspersquarefoot().toFixed(5)}`;

  else if(heightRadio.checked)
    result.textContent = `Height = ${computeheight().toFixed(5)}`;
})

// calculation

// gallonspersquarefoot = height * 7.48052

function computegallonspersquarefoot() {
  return Number(height.value) * 7.48052;
}

function computeheight() {
  return Number(gallonspersquarefoot.value) / 7.48052;
}