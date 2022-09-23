const container = document.querySelector('.container'),
  theme = container.querySelector('.theme'),
  disp = container.querySelector('.output .input'),
  prevInput = container.querySelector('.output .previous-input'),
  buttonList = container.querySelectorAll('button');

theme.addEventListener('click', (e) => {
  if (container.classList.contains('light')) {
    container.classList.remove('light');
    container.classList.add('dark');
    theme.querySelector('img').src = './assets/Sun.png';
  } else {
    container.classList.remove('dark');
    container.classList.add('light');
    theme.querySelector('img').src = './assets/moon.png';
  }
});

buttonList.forEach(function (i) {
  i.addEventListener('click', function (e) {
    let result = e.target.innerText;
    if (result != '=') {
      if (result != 'AC') {
        disp.innerText = disp.innerText + result;
        prevInput.innerText = disp.innerText;
      } else {
        disp.innerText = '0';
        prevInput.innerText = '0';
      }
    } else {
      calculate();
    }
  });
});

function calculate() {
  if (disp.innerText == '') {
    alert('Please enter a number');
  } else {
    disp.innerText = eval(disp.innerText);
  }
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then((registration) => {
      console.log('SW Registered!');
      console.log(registration);
    })
    .catch((error) => {
      console.log('SW Registered failed!');
      console.log(error);
    });
}
