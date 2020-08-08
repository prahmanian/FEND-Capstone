function updateView(tripInfo) {
    // get dom container
    const resultDiv = document.getElementById('results');

    if (tripInfo) {

//         tripInfo = {
//     city: '',
//     state: '',
//     latitude: '',
//     longitude: '',
//     date: '',
//     image: '',
//     countdown: '',
//     weatherInfo: '',
//     tempLow: '',
//     tempHigh: '',
//     weatherDescription: ''
// }
        resultDiv.innerHTML = `
        <div class="container">
            <div class="sentiment_value"><h3>City</h3>: ${tripInfo.city}</div>
            <div class="sentiment_value"><h3>State</h3>: ${tripInfo.state}</div>
            <div class="sentiment_value"><h3>Departure Date</h3>: ${tripInfo.date}</div>
            <div class="sentiment_value"><h3>Days Till Trip</h3>: ${tripInfo.countdown}</div>
            <div class="sentiment_value"><h3>Weather</h3> <h4>High Temp</h4>${tripInfo.tempHigh} &deg;F <h4>Low Temp</h4>${tripInfo.tempLow} &deg;F <p>${tripInfo.weatherDescription}</p></div>
        </div>`;
    } else {
        // Client.displayError();
        alert('failed to update view');
    }
};

export {updateView};