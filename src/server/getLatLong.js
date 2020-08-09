// This function calls the Pixabay API to return a image URL based on destination
const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');

const getLatLong = async (city='', state='') => {
    const baseUrl = `http://api.geonames.org/searchJSON?username=${process.env.GEONAMES_API_USERNAME}&maxRows=1&q=`
    const searchTerm = encodeURIComponent(`${city} ${state}`)
    
    const result = await axios.get(baseUrl+searchTerm)
    if (result.data.geonames.length > 0) {
        const lat = result.data.geonames[0].lat;
        const long = result.data.geonames[0].lng;
        // console.log(":::LATITUDE::: ", lat)
        // console.log(":::LONGITUDE::: ", long)
        const latLongObj = {
            latitude: lat,
            longitude: long
        }

        return latLongObj
    } else {
        console.log(`ERROR: code ${result.status} ${result.statusText}.`);
        return {
            latitude: 'No Lat',
            longitude: 'No Long'
        };
}
}



module.exports = getLatLong;