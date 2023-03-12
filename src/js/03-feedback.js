import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
populateTextarea();

form.addEventListener('input', throttle(onTextareaInput, 500));

function onTextareaInput() {
  const feedback = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
}

function populateTextarea() {
  const savedFeedback = localStorage.getItem('feedback-form-state');
  if (savedFeedback) {
    const feedback = JSON.parse(savedFeedback);
    emailInput.value = feedback.email;
    messageInput.value = feedback.message;
  }
}
form.addEventListener('submit', event => {
  event.preventDefault();
  const feedback = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.removeItem('feedback-form-state');
  event.target.reset();
  console.log(feedback);
});

