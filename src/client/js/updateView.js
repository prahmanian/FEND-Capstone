function updateView(sentiment) {
    // get dom container
    const resultDiv = document.getElementById('results');

    if (sentiment) {

        for (let i=0; i<sentiment.length; i++) {
            sentiment[i] = sentiment[i].charAt(0).toUpperCase() + sentiment[i].slice(1).toLowerCase()
        };

        sentiment.score_tag = sentiment.score_tag.charAt(0).toUpperCase() + sentiment.score_tag.slice(1).toLowerCase();
        sentiment.agreement = sentiment.agreement.charAt(0).toUpperCase() + sentiment.agreement.slice(1).toLowerCase();
        sentiment.subjectivity = sentiment.subjectivity.charAt(0).toUpperCase() + sentiment.subjectivity.slice(1).toLowerCase();
        sentiment.confidence = sentiment.confidence.charAt(0).toUpperCase() + sentiment.confidence.slice(1).toLowerCase();
        sentiment.irony = sentiment.irony.charAt(0).toUpperCase() + sentiment.irony.slice(1).toLowerCase();

        resultDiv.innerHTML = `
        <div class="container">
            <div class="sentiment_value"><h3>Score</h3>: ${sentiment.score_tag}</div>
            <div class="sentiment_value"><h3>Agreement</h3>: ${sentiment.agreement}</div>
            <div class="sentiment_value"><h3>Subjectivity</h3>: ${sentiment.subjectivity}</div>
            <div class="sentiment_value"><h3>Confidence</h3>: ${sentiment.confidence}</div>
            <div class="sentiment_value"><h3>Irony</h3>: ${sentiment.irony}</div>
        </div>`;
    } else {
        Client.displayError();
    }
};

export {updateView};