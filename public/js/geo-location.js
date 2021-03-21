$(document).ready(() => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (p) => {
        showUserDetails(p.coords.latitude, p.coords.longitude);
      },
      (e) => {
        ipLookup();
      }
    );
  } else {ipLookup();}
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
    // $("#state").text(additional.state.name);
    $("#city").text(additional.city.name);
    $("#continent").text(additional.continent.name);
  }
  // console.log(additional.state.name);
}

function ipLookup() {
  $.get("https://api.userinfo.io/userinfos", (r) => {
    showUserDetails(r.position.latitude, r.position.longitude, r);
  });
}

// $('#location-button').click(function(){

//   if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(function(position){
//         console.log(position);
//         $.get( "http://maps.googleapis.com/maps/api/geocode/json?latlng="+ position.coords.latitude + "," + position.coords.longitude +"&sensor=false", function(data) {
//           console.log(data);
//         })
//         var img = new Image();
//         img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=13&size=800x400&sensor=false";
//         $('#output').html(img);
//       });

//   }

// });
