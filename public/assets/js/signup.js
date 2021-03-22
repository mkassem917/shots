$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const firstNameInput = $("input#first-input");
  const lastNameInput = $("input#last-input");
  const stateInput = $("#state-input");
  const ageInput = $("#age-input");
  const essentialInput = $("#essential-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", () => {

    const userData = {
      email: emailInput.val().trim(),
      first_name: firstNameInput.val().trim(),
      last_name: lastNameInput.val().trim(),
      state: stateInput.val().trim(),
      age: ageInput.val().trim(),
      essential_worker: essentialInput.val().trim(),
    };

    if (
      !userData.email ||
      !userData.first_name ||
      !userData.last_name ||
      !userData.state ||
      !userData.age
    ) {
      return false;
    }
  });
});
