$(document).ready(() => {
  const key = "7e3bafb672774e49bfa657f1d33be17a";

  // node fetch
  const userState = $("#state-input"); 
  console.log(userState);
  const stateData =
    `https://api.covidactnow.org/v2/state/${userState}.json?apiKey=` + key;
  

  $.ajax({
    url: stateData,
    method: "GET",
  }).then((response) => {
    console.log(response.url);
    $("#userState").append(response.state);
    $("#cases").append(response.actuals.cases);

    if (response.riskLevels.overall === "2" || "3" || "4" || "5") {
      $("#riskLevelHigh").append("Critical to Extreme Risk Level");
      $("#riskLevelLow").hide();
      $("#riskLevelMed").hide();
    }
    if (response.riskLevels.overall === "0") {
      $("#riskLevelHigh").hide();
      $("#riskLevelLow").append("Critical to Extreme Risk Level");
      $("#riskLevelMed").hide();
    }
    if (response.riskLevels.overall === "1") {
      $("#riskLevelHigh").hide();
      $("#riskLevelLow").hide();
      $("#riskLevelMed").append("Critical to Extreme Risk Level");
    }
  });

});
