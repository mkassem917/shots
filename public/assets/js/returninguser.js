$(document).ready(() => {
  const loginForm = $("form.login");
  loginForm.on("submit", () => {
    const emailParam = $("#email-input")
      .val()
      .trim();
    const route = "/returning/" + emailParam;
    console.log(route);
    $(".login").attr("action", route);
  });
});
