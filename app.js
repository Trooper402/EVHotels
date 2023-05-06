function findHotels() {
  // Get user input from form
  const location = document.getElementById("location").value;
  const speed = document.getElementById("speed").value;

  // Send GET request to PlugShare API
  axios
    .get(
      `https://api.plugshare.com/v3/locations?api_key=${API_KEY}&lat=${lat}&lng=${lng}&max_results=10&device_types=2,19&charge_level=${speed}`
    )
    .then((response) => {
      // Sort hotels by distance from user location
      const hotels = response.data;
      const sortedHotels = getHotels(hotels);

      // Generate hotel cards for each hotel and display them on the app page
      const hotelList = document.getElementById("hotel-list");
      hotelList.innerHTML = "";
      sortedHotels.forEach((hotel) => {
        const card = generateHotelCard(hotel);
        hotelList.appendChild(card);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
function findHotels() {
  // get user input values
  const location = document.getElementById("location").value;
  const speed = document.getElementById("speed").value;

  // generate mock hotel data
  const hotels = [
    { name: "Hotel A", address: "123 Main St", chargingSpeed: 1 },
    { name: "Hotel B", address: "456 Oak St", chargingSpeed: 2 },
    { name: "Hotel C", address: "789 Pine St", chargingSpeed: 3 },
    { name: "Hotel D", address: "321 Elm St", chargingSpeed: 2 },
    { name: "Hotel E", address: "654 Maple St", chargingSpeed: 1 },
  ];

  // filter hotels based on user input
  const filteredHotels = hotels.filter((hotel) => hotel.chargingSpeed >= speed);

  // display hotel results on web page
  const hotelList = document.getElementById("hotel-list");
  hotelList.innerHTML = "";
  filteredHotels.forEach((hotel) => {
    const hotelElement = document.createElement("div");
    hotelElement.innerHTML = `<h2>${hotel.name}</h2><p>${hotel.address}</p><p>Charging Speed: ${hotel.chargingSpeed}</p>`;
    hotelList.appendChild(hotelElement);
  });
}
