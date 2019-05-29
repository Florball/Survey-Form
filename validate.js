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
    alert('Llenar campo nombre, usando minimo 6 y máximo 40 caracteres.');
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
    alert('Llenar campo edad')
    evt.preventDefault();
  }
  else if (ageValue < 16 || ageValue > 80) {
    age.className = 'error';
    alert('La edad mínima para llenar el formulario es de 16 años y la maxima de 80 años');
    evt.preventDefault();
  }
  else if (isNaN(ageValue)) {
    age.className = 'error';
    alert('El campo edad se llena con números');
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
    window.alert(" Llenar campo email");
    evt.preventDefault();
  }
  else if (!OK) {
    email.className = 'error'; 
    window.alert(email.value + " no es un correo válido");
    evt.preventDefault();
  }
  else {
    email.className = 'personal-information';
  }
}
