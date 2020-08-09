async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let inputCity = document.getElementById('city').value
    let inputState = document.getElementById('state').value
    let inputDate = document.getElementById('date').value
    let returnDate = document.getElementById('returnDate').value
    // console.log("url stringified::::", JSON.stringify(url));
    let validation = Client.validateInput(inputCity, inputState, inputDate);


    if (!validation) {
        alert('Please provide valid data! Ensure your destination is non-numerical and your departure date is in the future.');
    } else{
        const tripObj = {
            city: inputCity,
            state: inputState,
            date: inputDate,
            returnDate: returnDate,
        };

        console.log(tripObj);

        const apiCall = await fetch('/trip', {
            method: "POST",
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tripObj),
            // body: tripObj,
        });
        const tripData = await apiCall.json();
        console.log("TRIPDATA:::", tripData);
        // fetch sentiment
        // const sentiment = await fetch('/trip');
        // const sentimentJsonified = await sentiment.json();
        // console.log("sentimentJsonified", sentimentJsonified);
        Client.updateView(tripData);
    }

    

};

export { handleSubmit }