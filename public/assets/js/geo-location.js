$(document).ready(() => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      p => {
        showUserDetails(p.coords.latitude, p.coords.longitude);
      },
      e => {
        ipLookup(e);
      },
      console.log("reading if")
    );
  } else {
    ipLookup();
  }
  console.log("reading this main function");
});

function showUserDetails(latitude, longitude, additional) {
  const position = latitude + "," + longitude;

  $("#latitude").text(latitude);
  $("#longitude").text(longitude);

  const url =
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyBDHRQ1mpF_Jp1SKvGZXgxlnaYuD4pmA2I&q=covid-19+vaccination+clinic," +
    position;
  
  $("iframe").attr("src", url); 

  if (typeof additional !== "undefined") {
    $("#country").text(additional.country.name);
    $("#city").text(additional.city.name);
    $("#continent").text(additional.continent.name);
  }
}

function ipLookup() {
  $.get("https://api.userinfo.io/userinfos", r => {
    showUserDetails(r.position.latitude, r.position.longitude, r);
  });
  console.log("ip lookup reading");
}