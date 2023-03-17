import _throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

function loadForm() {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    Object.entries(parsedData).forEach(([key, value]) => {
      const inputEl = formEl.querySelector(`[name=${key}]`);
      if (inputEl) inputEl.value = value;
    });
  }
}
// ---//
let data = {};

formEl.addEventListener('input', _throttle(onSaveFormInput, 500));

formEl.addEventListener('submit', onFormSubmit);

function onSaveFormInput(event) {
  data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

  data[event.target.name] = event.target.value;

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (!event.target.email.value || !event.target.message.value) {
    alert('Enter all data');
    return;
  }
  event.target.reset();
  console.log(data);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}
