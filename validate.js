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

const form = document.getElementById('survey-form');
const elementsForm = form.elements;
const buttom = document.getElementById('btn-submit');

window.addEventListener('load', start, false);

function start() {
  form.addEventListener('submit', validate, false);
}

function validate(evt) {
  var name = form.name.value;
  var email = form.email.value;
  if (name === '') {
    alert('Escribir nombre');
    evt.preventDefault();
  }
}
