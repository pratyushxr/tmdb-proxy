// netlify/functions/tmdbProxy.js

const axios = require('axios');

exports.handler = async (event, context) => {
  const url = event.queryStringParameters.url; // Get the URL parameter
  const API_KEY = 'e561bd41aedb2c5b9e6a5ce102b1f905';  // Replace with your TMDB API Key

  try {
    const response = await axios.get(`https://api.themoviedb.org/3${url}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error fetching data from TMDB' }),
    };
  }
};
