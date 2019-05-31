// Declarando constantes de elementos del formulario.
const form = document.getElementById('survey-form');
const buttom = document.getElementById('btn-submit');
const name = form.name;
const age = form.number;
const email = form.email;
const tooltipName = document.getElementById('tooltip-name');
const tooltipAge = document.getElementById('tooltip-age');
const tooltipEmail = document.getElementById('tooltip-email');

// Evento al cargar la ventana.
window.addEventListener('load', start, false);

// Función enviar y el formulario al validar.
function start() {
  form.addEventListener('submit', validate, false);
  name.addEventListener('keyup', (e) => validateName(e.target.value));
  age.addEventListener('keyup', (e) => validateAge(e.target.value));
  email.addEventListener('keyup', (e) => validateEmail(e.target.value));
}

// Funcion validar campos.
const validate = (evt) => {
  validateEmail(evt);
  validateAge(evt);
  validateName(evt);
}

// Función validar name.
const validateName = (evt) => {
  let reg = /^[ña-z]+[ña-z ]{6,30}$/i;
  let OK = reg.test(name.value);
  if (!OK) {
    name.className = 'error';
    tooltipName.classList.replace('tooltip', 'tooltipActive');
    scrollTo(document.body, 200);
    name.focus();
    evt.preventDefault();
  }
  else {
    name.className = 'personal-information';
    tooltipName.classList.replace('tooltipActive', 'tooltip');
  }
}

// Funcion validar edad. 
const validateAge = (evt) => {
  const ageValue = age.value; 
  if (ageValue === '') {
    age.className = 'error';
    tooltipAge.classList.replace('tooltip', 'tooltipActive');
    scrollTo(document.body, 200);
    age.focus();
    evt.preventDefault();
  }
  else if (ageValue < 16 || ageValue > 80) {
    age.className = 'error';
    tooltipAge.classList.replace('tooltip', 'tooltipActive');
    scrollTo(document.body, 200);
    age.focus();
    evt.preventDefault();
  }
  else if (isNaN(ageValue)) {
    age.className = 'error';
    tooltipAge.classList.replace('tooltip', 'tooltipActive');
    scrollTo(document.body, 200);
    age.focus();
    evt.preventDefault();
  }
  else {
    age.className = 'personal-information';
    tooltipAge.classList.replace('tooltipActive', 'tooltip');
  }
}

// Funcion validar email. 
const validateEmail = (evt) => {
  let reg = /^\w+([.-]?\w+)*@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/i;
  let OK = reg.exec(email.value);
  if (!OK) {
    email.className = 'error'; 
    tooltipEmail.classList.replace('tooltip', 'tooltipActive');
    scrollTo(document.body, 200);
    email.focus();
    evt.preventDefault();
  }
  else {
    email.className = 'personal-information';
    tooltipEmail.classList.replace('tooltipActive', 'tooltip');
  }
}
