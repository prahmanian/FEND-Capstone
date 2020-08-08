// This function calls the Pixabay API to return a image URL based on destination
const dotenv = require('dotenv');
dotenv.config();

const getImageUrl = async (city='', state='') => {
    const baseUrl = `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&image_type=photo&category=travelq=`
    const searchTerm = encodeURIComponent(`${city} ${state}`)

    try {
        const result = await axios.get(baseUrl+searchTerm);
        console.log('Pixabay API: ', result, result.status, result.statusText, result.ok);
        
        if (result.ok) {
            const data = await result.json()
            if (data.totalhits > 0) {
                return data.hits[0].webformatURL
            } else {
                console.log("No image results", `ERROR: code ${response.status} ${response.statusText}.`)
            }
        }
        

    } catch (error) {
        console.log(`Error = ${error}`);
    }

};

// getImageUrl("Austin", "Texas");

export { getImageUrl }
module.exports =getImageUrl;