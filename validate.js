// Declarando constantes de elementos.
const form = document.getElementById('survey-form');
const buttom = document.getElementById('btn-submit');
const name = form.name;
const age = form.number;
const email = form.email;

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
  validateName(evt);
  validateAge(evt);
  validateEmail(evt);
}

// Función validar name.
const validateName = (evt) => {
  let reg = /^[ña-z]+[ña-z ]{6,30}$/i;
  let OK = reg.test(name.value);
  if (!OK) {
    name.className = 'error';
    scrollTo(document.body, 200);
    evt.preventDefault();
  }
  else {
    name.className = 'personal-information';
  }
}

// Funcion validar edad. 
const validateAge = (evt) => {
  const ageValue = age.value; 
  if (ageValue === '') {
    age.className = 'error';
    scrollTo(document.body, 200);
    evt.preventDefault();
  }
  else if (ageValue < 16 || ageValue > 80) {
    age.className = 'error';
    scrollTo(document.body, 200);
    evt.preventDefault();
  }
  else if (isNaN(ageValue)) {
    age.className = 'error';
    scrollTo(document.body, 200);
    evt.preventDefault();
  }
  else {
    age.className = 'personal-information';
  }
}

// Funcion validar email. 
const validateEmail = (evt) => {
  let reg = /^\w+([.-]?\w+)*@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/i;
  let OK = reg.exec(email.value);
  if (email.value === '') {
    email.className = 'error'; 
    scrollTo(document.body, 200);
    evt.preventDefault();
  }
  else if (!OK) {
    email.className = 'error'; 
    scrollTo(document.body, 200);
    evt.preventDefault();
  }
  else {
    email.className = 'personal-information';
  }
}
