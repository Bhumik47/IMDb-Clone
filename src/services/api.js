import axios from 'axios';

export const categoryMovies = async (API_URL) => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Return the data property directly
  } catch (error) {
    console.log('Error while calling the API', error.message);
    throw error; // Rethrow the error to handle it in the calling code
  }
};
