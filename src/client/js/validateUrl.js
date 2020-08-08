function validateUrl(inputURL) {
    console.log("::: Running validateUrl :::", inputURL);
    
    // set up regex for url
    let regex = new RegExp(
        "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"
    );

    if (regex.test(inputURL)) {
        console.log(">>> URL valid <<<");
        return true;
    } else {
        console.log(">>> URL invalid <<<");
        return false;
    }
    
}

export { validateUrl }