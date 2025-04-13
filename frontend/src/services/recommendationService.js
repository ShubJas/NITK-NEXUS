import axios from "axios";

export const generateRecommendation = async (quizData) => {
  try {
    const token = localStorage.getItem("token");
    const rollNo = localStorage.getItem("rollNo");

    console.log("Quiz Data from frontend: ", quizData);

    const response = await axios.post(
      `http://localhost:8000/api/v1/recommendations/generate,${rollNo}`,
      quizData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Response got on frontend: ", response.data);

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
      `http://localhost:8000/api/v1/recommendations/get/${rollNo}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching recommendation:", error);
    throw error;
  }
};
