import axios from "axios";
import firebase from "firebase/app";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import admin from "firebase-admin";
import serviceAccount from "path/to/serviceAccount.json";

// Function to retrieve hotels from Plugshare API
function getHotels() {
  axios
    .get("https://api.plugshare.com/rest/stations/")
    .then(function (response) {
      const hotels = response.data.stations;
      // Generate hotel cards for each hotel
      const hotelCards = hotels.map(generateHotelCard);
      // Add hotel cards to the DOM
      const hotelsContainer = document.getElementById("hotels-container");
      hotelsContainer.innerHTML = hotelCards.join("");
    })
    .catch(console.error);
}

// Function to generate a hotel card for a given hotel object
function generateHotelCard(hotel) {
  const address = `${hotel.address}, ${hotel.city}, ${hotel.state} ${hotel.postal_code}`;
  const { name, ev_networks } = hotel;
  const chargingLevel = ev_networks[0].level;
  const chargingSpeed = ev_networks[0].power;
  return `
    <div class="hotel-card">
      <h2>${name}</h2>
      <p>${address}</p>
      <p>Charging Level: ${chargingLevel}</p>
      <p>Charging Speed: ${chargingSpeed} kW</p>
    </div>
  `;
}

// Retrieve information for a specific charging station from Plugshare API
const stationId = "12345"; // replace with the ID of the charging station you want to retrieve information for
axios
  .get(`https://api.plugshare.com/api/v3/stations/${stationId}`)
  .then(
    ({
      data: {
        attributes: { compatible_vehicles },
      },
    }) => {
      console.log(compatible_vehicles);
    }
  )
  .catch(console.error);

// Use Axios to retrieve hotel data from Expedia API
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
  .then(({ data }) => console.log(data.data))
  .catch(console.error);

// Initialize Firebase app and analytics
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "ev-hotel-finder.firebaseapp.com",
  projectId: "ev-hotel-finder",
  storageBucket,
};
