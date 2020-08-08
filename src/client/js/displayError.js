function displayError() {
    console.log("::: Running displayError :::");
    
    const output = document.getElementById('results');
    output.innerHTML = '<h3>Error</h3><h4>Invalid URL</h4><p class="error">URL should be a valid format like www.exampleurl.com</p>';
    
}

export { displayError }