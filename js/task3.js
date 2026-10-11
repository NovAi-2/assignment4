const form = document.getElementById('contactForm');
const fields = form.querySelectorAll('input, textarea');
const emailInput = document.getElementById('email');
const emailFeedback = document.getElementById('emailFeedback');
const successAlert = document.getElementById('successAlert');

// Mark a single field as valid or invalid using Bootstrap classes
function validateField(field) {
  if (field === emailInput) {
    if (field.validity.valueMissing) {
      emailFeedback.textContent = 'Email is required.';
    } else if (field.validity.typeMismatch) {
      emailFeedback.textContent = 'Please enter a valid email address.';
    }
  }

  if (field.checkValidity()) {
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
  } else {
    field.classList.remove('is-valid');
    field.classList.add('is-invalid');
  }
}

// Validate a field after the user leaves it and while they type
fields.forEach(function (field) {
  field.addEventListener('blur', function () {
    validateField(field);
  });
  field.addEventListener('input', function () {
    if (field.classList.contains('is-valid') || field.classList.contains('is-invalid')) {
      validateField(field);
    }
  });
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  fields.forEach(validateField);

  if (form.checkValidity()) {
    successAlert.classList.remove('d-none');
    form.reset();
    fields.forEach(function (field) {
      field.classList.remove('is-valid', 'is-invalid');
    });
  } else {
    successAlert.classList.add('d-none');
  }
});
