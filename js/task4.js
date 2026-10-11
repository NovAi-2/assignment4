const form = document.getElementById('registerForm');
const textFields = form.querySelectorAll('input:not([type="radio"]):not([type="checkbox"]), select');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const confirmFeedback = document.getElementById('confirmFeedback');
const emailInput = document.getElementById('email');
const emailFeedback = document.getElementById('emailFeedback');
const genderFeedback = document.getElementById('genderFeedback');
const hobbiesFeedback = document.getElementById('hobbiesFeedback');
const successAlert = document.getElementById('successAlert');

function setState(field, isValid) {
  field.classList.toggle('is-valid', isValid);
  field.classList.toggle('is-invalid', !isValid);
}

// Validate one text input or select
function validateField(field) {
  if (field === emailInput) {
    emailFeedback.textContent = field.validity.valueMissing
      ? 'Email is required.'
      : 'Please enter a valid email address.';
  }

  if (field === confirmPassword) {
    if (field.value === '') {
      field.setCustomValidity('Required');
      confirmFeedback.textContent = 'Please confirm your password.';
    } else if (field.value !== password.value) {
      field.setCustomValidity('Mismatch');
      confirmFeedback.textContent = 'Passwords do not match.';
    } else {
      field.setCustomValidity('');
    }
  }

  setState(field, field.checkValidity());
}

function validateGender() {
  const selected = form.querySelector('input[name="gender"]:checked');
  genderFeedback.classList.toggle('d-none', selected !== null);
  return selected !== null;
}

function validateHobbies() {
  const selected = form.querySelectorAll('input.hobby:checked').length > 0;
  hobbiesFeedback.classList.toggle('d-none', selected);
  return selected;
}

textFields.forEach(function (field) {
  field.addEventListener('blur', function () {
    validateField(field);
  });
  field.addEventListener('input', function () {
    if (field.classList.contains('is-valid') || field.classList.contains('is-invalid')) {
      validateField(field);
    }
    // Keep the confirm field in sync when the password changes
    if (field === password && confirmPassword.value !== '') {
      validateField(confirmPassword);
    }
  });
  // Select elements fire "change" rather than "input" in some browsers
  field.addEventListener('change', function () {
    validateField(field);
  });
});

form.querySelectorAll('input[name="gender"]').forEach(function (radio) {
  radio.addEventListener('change', validateGender);
});

form.querySelectorAll('input.hobby').forEach(function (box) {
  box.addEventListener('change', validateHobbies);
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  textFields.forEach(validateField);
  const genderOk = validateGender();
  const hobbiesOk = validateHobbies();

  if (form.checkValidity() && genderOk && hobbiesOk) {
    successAlert.classList.remove('d-none');
    form.reset();
    clearValidation();
  } else {
    successAlert.classList.add('d-none');
  }
});

// Reset button: clear all validation styles and messages
form.addEventListener('reset', function () {
  successAlert.classList.add('d-none');
  clearValidation();
});

function clearValidation() {
  textFields.forEach(function (field) {
    field.classList.remove('is-valid', 'is-invalid');
    field.setCustomValidity('');
  });
  genderFeedback.classList.add('d-none');
  hobbiesFeedback.classList.add('d-none');
}
