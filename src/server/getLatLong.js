// This function calls the Pixabay API to return a image URL based on destination
const dotenv = require('dotenv');
dotenv.config();

const getLatLong = async (city='', state='') => {
    const baseUrl = `http://api.geonames.org/searchJSON?username=${process.env.GEONAMES_API_USERNAME}&maxRows=1&q=`
    const searchTerm = encodeURIComponent(`${city} ${state}`)
    
    
    try {
        const result = await axios.get(baseUrl+searchTerm);
        console.log('Geonames API: ', result, result.status, result.statusText, result.ok);
        
        if (result.ok) {
            const data = await result.json()
            if (data.geonames.length > 0) {
                return {
                    latitude: data.geonames[0].lat,
                    longitude: data.geonames[0].lng
                }
            } else {
                console.log(`ERROR: code ${response.status} ${response.statusText}.`)
            }
        }
        

    } catch (error) {
        console.log(`Error = ${error}`);
    }

};

// example result from api call using 'Austin Texas'
// getLatLong("Austin", "Texas");
// {"totalResultsCount":986,"geonames":[{"adminCode1":"TX","lng":"-97.74306","geonameId":4671654,"toponymName":"Austin","countryId":"6252001","fcl":"P","population":931830,"countryCode":"US","name":"Austin","fclName":"city, village,...","adminCodes1":{"ISO3166_2":"TX"},"countryName":"United States","fcodeName":"seat of a first-order administrative division","adminName1":"Texas","lat":"30.26715","fcode":"PPLA"}]}

export { getLatLong }
module.exports = getLatLong;