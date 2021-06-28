function compute() {
  var principal = parseInt(document.getElementById('principal').value);
  if (Number.isNaN(principal) || principal < 1) {
    alert('Enter a positive number');
    document.getElementById('principal').focus();
    return;
  }
  var rate = document.getElementById('rate').value;
  var years = document.getElementById('years').value;
  var interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);

  var result = document.getElementById('result');
  result.innerHTML = `If you deposit <span class="yellow">${principal}</span> <br> `;
  result.innerHTML += `at an interest rate of <span class="yellow">${rate}%</span>. <br> `;
  result.innerHTML += `You will receive an amount of <span class="yellow">${interest}</span>, <br> `;
  result.innerHTML += `in the year <span class="yellow">${year}</span>`;
}

function updateRate() {
  var rateval = document.getElementById('rate').value;
  document.getElementById('rate_val').innerText = rateval;
}
