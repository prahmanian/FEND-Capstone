// calculates the number of days from the current date until the departure date
const getDaysTillTrip = (date='') => {
    let currentDate = new Date();
        travelDate = new Date(date);
        let deltaMilliseconds = travelDate - currentDate;
        let daysTillTrip = Math.round(deltaMilliseconds / 1000 / 60 / 60 / 24);
        console.log("daysTillTrip", daysTillTrip)
        return daysTillTrip
    }

module.exports = getDaysTillTrip