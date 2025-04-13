import axios from "axios";

const API_BASE = "http://localhost:8000/api/v1/recommendations";

export const generateRecommendation = async (quizData) => {
  try {
    const token = localStorage.getItem("token");
    const rollNo = localStorage.getItem("rollNo");

    const response = await axios.post(
      `${API_BASE}/generate/${rollNo}`,
      quizData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error generating recommendation:", error);
    throw error;
  }
};

export const getRecommendation = async () => {
  try {
    const token = localStorage.getItem("token");
    const rollNo = localStorage.getItem("rollNo");
    
    const response = await axios.get(
      `${API_BASE}/get/${rollNo}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching recommendation:", error);
    throw error;
  }
};