// const surveyForm = () => {

//   const validateName = (e) => {
//     if (form.name.value == 0) {
//       alert('hola')
//       e.preventDefault();
//     }
//   };
//   const validate = (e) => {
//     validateName(e);
//   };

//   form.addEventListener('submit', validate);
// };
// alert('flor');

const form = document.getElementById('survey-form');
const elementsForm = form.elements;
const buttom = document.getElementById('btn-submit');

window.addEventListener('load', start, false);

function start() {
  form.addEventListener('submit', validate, false);
}

function validate(evt) {
  var cla1 = form.name.value;
  var cla2 = form.email.value;
  if (cla1 !== cla2) {
    alert('Las claves ingresadas son distintas');
    evt.preventDefault();
  }
}