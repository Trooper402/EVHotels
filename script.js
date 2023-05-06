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
