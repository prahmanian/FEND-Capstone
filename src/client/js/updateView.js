function updateView(tripInfo) {
    // get dom container
    const newTrip = document.getElementById('newTrip');

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
        newTrip.innerHTML = `
        <h2>Your Newest Trip</h2>
        <div class="card ">
            <figure class="details image">
                <img class="trip_image image" src="${tripInfo.image}" alt="destination image">
            </figure>
            <div class="details destination">
                <h3><span>Upcoming Trip to</span>: ${tripInfo.city}, ${tripInfo.state}</h3>
            </div>
            <div class="details info">
                <span>Departing on</span>: ${tripInfo.date}<br>
                <span>You are staying for</span>: ${tripInfo.duration} days.<br>
                <span>Only ${tripInfo.countdown} Days Till Your Trip!</span>
            </div>
            <div class="details weather">
                <h3>Weather Outlook</h3>
                <span>Source: </span> ${tripInfo.weatherInfo}<br>
                <span>High Temp</span> ${tripInfo.tempHigh} &deg;F <br>
                <span>Low Temp</span> ${tripInfo.tempLow} &deg;F <br>
                <p><em>${tripInfo.weatherDescription}</em></p>
            </div>
        </div>`;
    } else {
        // Client.displayError();
        alert('failed to update view')
    }
};

export {updateView};