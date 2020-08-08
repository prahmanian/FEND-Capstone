// checks to ensure user input is provided and of proper format
function validateInput(city, state, date) {
    console.log("::: Running validateInput :::", city, state, date);
    
    // set up regex
    let reg = /[a-zA-Z]+/;
    let regDate = /^(202\d{1})-(\d{1,2})-(\d{1,2})$/g;
    
    // make sure input date is in the future
    const checkDate = (date) => {
        const inputDate = new Date(date);
        const today = new Date();
        return inputDate - today > 0;
    }

    if (city.match(reg) && state.match(reg) && date.match(regDate) && checkDate(date)) {
        console.log(">>> All inputs valid <<<");
        return true;
    } else {
        console.log(">>> Inputs invalid <<<");
        alert('Please provide valid data! Ensure your destination is non-numerical and your departure date is in the future.');
        return false;
    }
    
}

export { validateInput }