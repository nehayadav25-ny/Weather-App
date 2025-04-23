const url =
	'https://api.openweathermap.org/data/2.5/weather';
const apiKey =
	'f00c38e0279b7bc85480c3fe775d518c';

async function weatherFn(cName) {
	const temp =
		`${url}?q=${cName}&appid=${apiKey}&units=metric`;
	try {
		const res = await fetch(temp);
		const data = await res.json();
		if (res.ok) {
			weatherShowFn(data);
		} else {
			alert('City not found. Please try again.');
		}
	} catch (error) {
		console.error('Error fetching weather data:', error);
	}
}

function weatherShowFn(data) {
	$('#city-name').text(data.name);
	$('#date').text(moment().
		format('MMMM Do YYYY, h:mm:ss a'));
	$('#temperature').
		html(`${data.main.temp}°C`);
	$('#description').
		text(data.weather[0].description);
	$('#wind-speed').
		html(`Wind Speed: ${data.wind.speed} m/s`);
	$('#weather-icon').
		attr('src',
			`...`);
	$('#weather-info').fadeIn();
}
function updateWeatherIcon(weatherCondition) {
	const weatherIcon = document.getElementById("weather-icon");
	const weatherDescription = document.getElementById("weather-description");

	// Set the icon and description based on the condition
	switch (weatherCondition.toLowerCase()) {
		case "fog":

			weatherDescription.innerText = "Foggy";
			break;
		case "sunny":

			weatherDescription.innerText = "Sunny";
			break;
		case "rain":

			weatherDescription.innerText = "Rainy";
			break;
		case "cloudy":

			weatherDescription.innerText = "Cloudy";
			break;
		default:

			weatherDescription.innerText = "Unknown Weather";
			break;
	}
}