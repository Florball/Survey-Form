const surveyForm = () => {
  const form = document.getElementsByName('survey-form')[0];
  const elementsForm = form.elements;
  const buttom = document.getElementById('btn-submit');
  
const validateName = (e) => {
  if(form.name.value === 0) {
    alert('completa el campo nombre');
    e.preventDefault();
  }
};

  const validate = (e) => {
    validateName(e);
  }

  form.addEventListener('submit', validate);
};
surveyForm();