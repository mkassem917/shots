// fetch for state data, testing with hard corded location

// const getUser= (user) => {
//     userId = user || '';
//     if (userId) {
//       userId = `/?user_id=${1}`;
//     }
const userId = "1";

// NEED to set up a key for the map itself with process.env variable to pass through the map
//if you click on the map link in the console log, you will get the api data for the sate
fetch(`/api/user/${userId}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success in getting posts:", data);
    const state = data.state; 
    console.log(state); 
    const map = `https://api.covidactnow.org/v2/state/${state}.json?apiKey=7e3bafb672774e49bfa657f1d33be17a`;
    console.log(map); 
  });
// //}

