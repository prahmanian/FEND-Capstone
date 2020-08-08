async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById('url').value
    // console.log("url stringified::::", JSON.stringify(url));
    let validation = Client.validateUrl(url)


    if (!validation) {
        Client.displayError();
    } else{
        const urlObj = {
            urlKey: url,
        };
        console.log(urlObj);
        const apiCall = await fetch('/title', {
            method: "POST",
            credentials: 'same-origin',
            // mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(urlObj),
            // body: urlObj,
        });
        const resData = await apiCall.json();
        console.log(resData);
        // fetch sentiment
        const sentiment = await fetch('/sentiment');

        
        const sentimentJsonified = await sentiment.json();
        
        console.log("sentimentJsonified", sentimentJsonified);
        Client.updateView(sentimentJsonified);
    }

    

};

export { handleSubmit }