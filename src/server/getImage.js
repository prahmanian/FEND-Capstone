// This function calls the Pixabay API to return a image URL based on destination
const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');

const getImageUrl = async (city='', state='') => {
    const baseUrl = `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&image_type=photo&category=travel&q=`
    const searchTerm = encodeURIComponent(`${city} ${state}`)

    try {
        const response = await axios.get(baseUrl+searchTerm)


        // console.log('Pixabay API: ', result, result.status, result.statusText, result.ok);
        // console.log(response)
        if (response.data.hits.length > 0) {
            // console.log("imageURL", response.data.hits[0].webformatURL)
            return response.data.hits[0].webformatURL
        }
    }
    catch (error) {
        console.log("no image results", error);
    };

};

module.exports =getImageUrl;