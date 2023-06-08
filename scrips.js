let apiKey = "9e7461c0aa194090196d9113681ca64f";
const urlBase = "https://api.openweathermap.org/data/2.5/weather";
const urlCompleta = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

const difKelvin = 273;

document.getElementById("btnBuscar").addEventListener("click", () => {
  const ciudad = document.getElementById("localidad").value;
  coneccionApi(ciudad);
});

function coneccionApi(ciudad) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((response) => mostrarDatos(response));
}

function mostrarDatos(response) {
  console.log(response);

  const titulo = document.getElementById("titulo");
  const temperatura = document.getElementById("temp");
  const humedad = document.getElementById("humedad");
  const descripcion = document.getElementById("descripcion");

  let temperatura1 = response.main.temp;
  let temperatura2 = temperatura1 - difKelvin;

  titulo.innerHTML = response.name;
  temperatura.innerHTML = `la temperatura actual en ${
    response.name
  } es de: ${Math.floor(temperatura2)}°`;
  humedad.innerHTML = `la humedad es de: ${response.main.humidity}% `;
  descripcion.innerHTML = `el cielo se presenta ${response.weather[0].description}`;
}
