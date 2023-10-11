console.log('Loaded Form');

const handleSubmit = (event) => {
  event.preventDefault();
  const formElement = event.target;
  const formData = new FormData(formElement);
  console.log('Sending');
  console.dir(event.target);
  console.log(formData);
  console.log(formData.get('userName'));

  console.log(formElement.elements.namedItem('userName').value);
};

const formElement = document.querySelector('.user-form');
formElement.addEventListener('submit', handleSubmit);
