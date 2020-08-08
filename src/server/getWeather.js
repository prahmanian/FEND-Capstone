// This function calls the Pixabay API to return a image URL based on destination
const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');

const getWeather = async (lat='', long='', daysTillTrip=0, date='') => {
    // console.log(date);
    let previousDate = date.split('-');
    previousDate[0] = (parseInt(previousDate[0])-1).toString();
    previousDate = previousDate.join('-');
    let endDate = new Date(previousDate)
    // increment the day
    endDate.setDate(endDate.getDate() + 2)
    // needs to be in yyyy-mm-dd format
    endDate = endDate.getFullYear()+'-'+ (endDate.getMonth()+1)+'-'+endDate.getDate()

    

    const forecastUrl = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHERBIT_API_KEY}&units=I&lat=${lat}&lon=${long}&days=`
    const historicalUrl = `http://api.weatherbit.io/v2.0/history/daily?key=${process.env.WEATHERBIT_API_KEY}&units=I&lat=${lat}&lon=${long}&start_date=${previousDate}&end_date=${endDate}`


    if (daysTillTrip < 8) {
        console.log(":::Fetching Weather Forcast:::");
        

        try {
            let result = await axios.get(forecastUrl+daysTillTrip.toString());
            // console.log('Weatherbit Forecast API:', result.status, result.statusText, result.ok);
            // console.log(result.data)
            
            // let forecastArr = await result.json();
            return {
                min_temp: result.data.data[0].min_temp,
                max_temp: result.data.data[0].max_temp,
                weather_description: result.data.data[0].weather.description,
                flag: 'forecasted data',
            };
        }
        catch (error) {
            console.log(error);
        };

    } else {
        console.log(":::Fetching Historical Weather Data:::");
        try {
            let result = await axios.get(historicalUrl);
            // console.log('Weatherbit Historical Data API:', result.status, result.statusText, result.ok);
            // console.log(result.data)
            
            return {
                min_temp: result.data.data[0].min_temp,
                max_temp: result.data.data[0].max_temp,
                weather_description: "This is historical data",
                flag: 'historical data',
            };
        }
        catch (error) {
            console.log(error);
        };
    }
};


module.exports = getWeather

