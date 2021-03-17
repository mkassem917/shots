$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const firstNameInput = $("input#first-input");
  const lastNameInput = $("input#last-input");
  const stateInput = $("#state-input");
  const ageInput = $("input#age-input");
  const essentialInput = $("#essential-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      first_name: firstNameInput.val().trim(),
      last_name: lastNameInput.val().trim(),
      state: stateInput.val().trim(),
      age: ageInput.val().trim(),
      essential_worker: essentialInput.val().trim(),
    };

    if (!userData.email || !userData.first_name || !userData.last_name || !userData.state || !userData.age) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.first_name, userData.last_name, userData.state, userData.age, userData.essential_worker);
    emailInput.val("");
    firstNameInput.val("");
    lastNameInput.val("");
    stateInput.val("");
    ageInput.val("");
    essentialInput.val("");
    console.log(userData);
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, first_name, last_name, state, age, essential_worker) {
    $.post("/api/signup", {
      email: email,
      first_name: first_name,
      last_name: last_name,
      state: state,
      age: age,
      essential_worker: essential_worker
    })
      .then(() => {
        //make this redirect to a waiting list or something
        window.location.replace("https://www.google.com/");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
