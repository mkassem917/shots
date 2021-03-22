// $(document).ready(() => {
//   console.log(userState);
//   const stateData =
//     `https://api.covidactnow.org/v2/state/${userState}.json?apiKey=` + key;
//   console.log(stateData);

//   $.ajax({
//     url: stateData,
//     method: "GET",
//   }).then((response) => {
//     console.log(response.url);
//     $("#userState").append(response.state);

//     if (response.riskLevels.overall === "0") {
//       $("#one").hide();
//       $("#twothree").hide();
//       $("#four").hide();
//       $("#five").hide();
//       $("#level").append("LOW");
//     }
//     if (response.riskLevels.overall === "1") {
//       $("#zero").hide();
//       $("#twothree").hide();
//       $("#four").hide();
//       $("#five").hide();
//       $("#level").append("MEDIUM");
//     }
//     if (response.riskLevels.overall === "2" || "3") {
//       $("#zero").hide();
//       $("#one").hide();
//       $("#four").hide();
//       $("#five").hide();
//       $("#level").append("HIGH");
//     }
//     if (response.riskLevels.overall === "4") {
//       $("#zero").hide();
//       $("#one").hide();
//       $("#twothree").hide();
//       $("#five").hide();
//       $("#level").append("a VERY HIGH ");
//     }
//     if (response.riskLevels.overall === "5") {
//       $("#zero").hide();
//       $("#one").hide();
//       $("#twothree").hide();
//       $("#five").hide();
//       $("#level").append("SEVERE");
//     }

//     $("#cases").append(response.actuals.cases);
//   });
// });
