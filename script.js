function getHotels() {
  axios
    .get("https://api.plugshare.com/rest/stations/")
    .then(function (response) {
      const hotels = response.data.stations;
      console.log(hotels);
    })
    .catch(function (error) {
      console.log(error);
    });
}
function generateHotelCard(hotel) {
  const name = hotel.name;
  const address = `${hotel.address}, ${hotel.city}, ${hotel.state} ${hotel.postal_code}`;
  const chargingLevel = hotel.ev_networks[0].level;
  const chargingSpeed = hotel.ev_networks[0].power;

  return `
    <div class="hotel-card">
      <h2>${name}</h2>
      <p>${address}</p>
      <p>Charging Level: ${chargingLevel}</p>
      <p>Charging Speed: ${chargingSpeed} kW</p>
    </div>
  `;
}
function getHotels() {
  axios
    .get("https://api.plugshare.com/rest/stations/")
    .then(function (response) {
      const hotels = response.data.stations;

      const hotelCards = hotels.map(function (hotel) {
        return generateHotelCard(hotel);
      });

      const hotelsContainer = document.getElementById("hotels-container");
      hotelsContainer.innerHTML = hotelCards.join("");
    })
    .catch(function (error) {
      console.log(error);
    });
}
const stationId = "12345"; // replace with the ID of the charging station you want to retrieve information for

fetch(`https://api.plugshare.com/api/v3/stations/${stationId}`)
  .then((response) => response.json())
  .then((data) => {
    // retrieve the make and model of EVs that are compatible with the charging station
    const compatibleEVs = data.data.attributes.compatible_vehicles;
    console.log(compatibleEVs);
  })
  .catch((error) => console.error(error));

const axios = require("axios");

const endpoint =
  "https://api.expediapartnercentral.com/hotels-service-api/v1.0/hotels";

const apiKey = "YOUR_API_KEY";

const params = {
  destinationCity: "Seattle",
  arrivalDate: "2022-05-30",
  departureDate: "2022-06-02",
  room1: "A,A",
};

axios
  .get(endpoint, {
    params,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: "application/json",
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgnoVFvJCPRLjRVXNoxSKC-RvFidcnfdE",
  authDomain: "ev-hotel-finder.firebaseapp.com",
  projectId: "ev-hotel-finder",
  storageBucket: "ev-hotel-finder.appspot.com",
  messagingSenderId: "133633891514",
  appId: "1:133633891514:web:de298d051f262d01637683",
  measurementId: "G-3T0M8WD0PK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase
// Your Firebase configuration

firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase Authentication service
var auth = firebase.auth();

// Add an event listener to the sign-up form
document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the user's email and password from the form
    var email = document.getElementById("email-input").value;
    var password = document.getElementById("password-input").value;

    // Create a new user account using the email and password
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        // User account created successfully, redirect to a different page or display a success message
      })
      .catch(function (error) {
        // Handle any errors that occur during the sign-up process
      });
  });

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ev-hotel-finder-default-rtdb.firebaseio.com",
});
