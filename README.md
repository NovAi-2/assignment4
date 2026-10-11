# Assignment 4. Forms and Validation

**Name:** YOUR NAME
**Group:** YOUR GROUP

## Project structure

```
assignment4/
  index.html                       links to all tasks
  task0-contact-form.html          Task 0
  task1-html5-validation.html      Task 1
  task2-bootstrap-form.html        Task 2
  task3-bootstrap-validation.html  Task 3
  task4-registration.html          Task 4
  css/plain.css                    basic styles for Tasks 0 and 1
  js/task3.js                      validation logic for Task 3
  js/task4.js                      validation logic for Task 4
  screenshots/                     screenshots used in this report
```

Bootstrap 5.3.3 is loaded from the jsDelivr CDN, so an internet connection is required to view Tasks 2, 3 and 4 as intended. To run the project, open `index.html` in a browser.

---

## Part 1. Basic HTML Forms

### Task 0. Simple Contact Form

**Task:** Create a basic contact form with Name (text input), Email (email input), Message (textarea) and a Submit button. All fields must have proper `<label>` elements.

**Implementation:** File `task0-contact-form.html`. Each field has a `<label>` linked to its input through the `for` and `id` attributes, so clicking a label focuses the corresponding field. The email field uses `type="email"` and the message field is a `<textarea>`.

**Screenshot:**

![Task 0](screenshots/task0.png)

### Task 1. Form with HTML5 Validation

**Task:** Add built-in validation attributes (`required`, `type`, `maxlength`, etc.) and test how the browser enforces validation.

**Implementation:** File `task1-html5-validation.html`. Attributes used:

| Field   | Attributes                                                        |
|---------|-------------------------------------------------------------------|
| Name    | `required`, `minlength="2"`, `maxlength="50"`, `pattern` (letters, spaces and hyphens only) |
| Email   | `type="email"`, `required`, `maxlength="100"`                     |
| Message | `required`, `minlength="10"`, `maxlength="300"`                   |

**Testing:** Submitting the empty form makes the browser stop the submission and show a "Please fill out this field" message on the first empty field. Entering text without the `@` sign in the email field shows an email format message. A name containing digits is rejected by the `pattern` attribute, and a message shorter than 10 characters is rejected by `minlength`.

**Screenshots:**

Empty form submission:

![Task 1 empty](screenshots/task1-empty.png)

Invalid email format:

![Task 1 invalid email](screenshots/task1-email.png)

---

## Part 2. Bootstrap Forms

### Task 2. Bootstrap Form Styling

**Task:** Recreate the contact form using Bootstrap form classes, arrange the fields with the grid system, and add placeholders and helper text.

**Implementation:** File `task2-bootstrap-form.html`. The form is placed inside a `container` and a `card`. Name and Email are in the same row (`col-12 col-md-6`), so they sit side by side on medium and larger screens and stack on small screens. Message takes the full width (`col-12`). Classes used: `form-label`, `form-control`, `form-text`, `btn btn-primary`, `row g-3`. Placeholders and helper text are added to every field.

**Screenshot:**

![Task 2](screenshots/task2.png)

### Task 3. Bootstrap Validation Styles

**Task:** Apply Bootstrap validation feedback classes (`is-valid`, `is-invalid`), show feedback messages under inputs and test with valid and invalid data.

**Implementation:** File `task3-bootstrap-validation.html` and `js/task3.js`. The page has two parts:

- Part A shows `is-valid` and `is-invalid` applied manually, together with `valid-feedback` and `invalid-feedback` blocks.
- Part B is a working contact form with the `novalidate` attribute. JavaScript checks each field with `checkValidity()` and sets `is-valid` or `is-invalid`. Validation runs when a field loses focus, while the user types (after the first check) and on submit. Messages such as "Email is required." and "Looks good!" are shown below the inputs. After a successful submit a success alert is displayed.

**Screenshots:**

Manually applied classes and empty form submission:

![Task 3 errors](screenshots/task3-errors.png)

Form filled with valid data:

![Task 3 valid](screenshots/task3-valid.png)

---

## Part 3. Advanced Form Project

### Task 4. Registration Form

**Task:** Create a registration form with First Name, Last Name, Email, Password and Confirm Password, Gender (radio buttons), Hobbies (checkboxes), Country (select), Submit and Reset buttons. Use the Bootstrap grid, HTML5 validation and Bootstrap validation feedback.

**Implementation:** File `task4-registration.html` and `js/task4.js`.

- Layout: Bootstrap grid. First and last name, password and confirm password, gender and country are arranged in two columns on medium screens and above, and stack into one column on mobile.
- HTML5 validation: `required` on all main fields, `type="email"`, `minlength` and `pattern` on names, and `minlength="8"` with a `pattern` on the password (at least one letter and one digit).
- Bootstrap feedback: `is-valid` and `is-invalid` classes with `valid-feedback` and `invalid-feedback` messages.
- Custom checks in JavaScript: the confirm password field must match the password (implemented with `setCustomValidity`), at least one gender must be selected, and at least one hobby must be selected.
- Buttons: Submit validates the whole form and shows a success alert if everything is correct. Reset clears all fields, validation classes and messages.

**Screenshots:**

Form with validation errors:

![Task 4 errors](screenshots/task4-errors.png)

Correctly filled form:

![Task 4 valid](screenshots/task4-valid.png)

Mobile view:

![Task 4 mobile](screenshots/task4-mobile.png)

---

## Summary of work process

I started with the plain HTML form and made sure that every input is connected to a label. Then I added the built-in HTML5 validation attributes and checked in the browser how they block submission and which messages they show. In Part 2 I rebuilt the same form with Bootstrap, using the grid for layout and `form-text` for hints, and then added the `is-valid` and `is-invalid` classes with feedback messages. Since Bootstrap does not validate anything on its own, I used a small JavaScript script based on the Constraint Validation API (`checkValidity`, `validity`, `setCustomValidity`) to switch these classes. In the last task I combined everything into a registration form, added the password confirmation check and the checks for radio buttons and checkboxes, which cannot be fully handled by a single HTML attribute in the case of checkbox groups, and tested the form on desktop and mobile widths.
