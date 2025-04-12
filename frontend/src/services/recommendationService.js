import axios from 'axios';


export const generateRecommendation = async (quizData) => {
  try {
    const response = await axios.post('http://localhost:8000/api/recommendations', quizData);
    return response.data;
  } catch (error) {
    console.error('Error generating recommendation:', error);
    throw error;
  }
};

export const getRecommendation = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/recommendations');
    return response.data;
  } catch (error) {
    console.error('Error fetching recommendation:', error);
    throw error;
  }
};