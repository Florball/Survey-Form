// Declarando constantes de elementos.
const form = document.getElementById('survey-form');
//const elementsForm = form.elements;
const buttom = document.getElementById('btn-submit');

// Evento al cargar la ventana.
window.addEventListener('load', start, false);

// Función enviar y el formulario al validar.
function start() {
  form.addEventListener('submit', validate, false);
}

function name() {
  object.addEventListener("keyup", myScript); 
}

// Funcion validar campos.
const validate = (evt) => {
  validateName(evt);
  validateAge(evt);
  validateEmail(evt);
}

// Funcion validar name.
const validateName = (evt) => {
  const name = form.name.value;
  let reg = /^[ña-z]+[ña-z ]{6,30}$/i;
  let OK = reg.exec(name);
  if (!OK) {
    form.name.className = 'error';
    alert('Llenar campo nombre, usando minimo 6 y máximo 40 caracteres.');
    evt.preventDefault();
  }
}

// Funcion validar edad. (CORREGIR CAMPO EDAD, SALE SIEMPRE LLENAR CAMPO EDAD)
const validateAge = (evt) => {
  const age = form.number.value;
  let reg = /^([0-9]*){2}/;
  let OK = reg.exec(age);
  if (!OK) {
    form.age.className = 'error';
    alert('Llenar campo edad')
    evt.preventDefault();
  }
  else if (age < 16 || age > 80) {
    form.age.className = 'error';
    alert('La edad mínima para llenar el formulario es de 16 años y la maxima de 80 años');
    evt.preventDefault();
  }
  else if (isNaN(age)) {
    alert('El campo edad se llena con números');
    evt.preventDefault();
  }
}

// Funcion validar email. 
const validateEmail = (evt) => {
  const email = form.email.value;
  let reg = /^\w+([.-]?\w+)*@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/i;
  let OK = reg.exec(email);
  if (email === '') {
    form.email.className = 'error'; 
    window.alert(" Llenar campo email");
    evt.preventDefault();
  }
  else if (!OK) {
    form.email.className = 'error'; 
    window.alert(email + " no es un correo válido");
    evt.preventDefault();
  }
}
