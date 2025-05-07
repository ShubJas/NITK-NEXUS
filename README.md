# NITK NEXUS : An Intelligent Integrated Platform for
Studies and Career Development

NITK Nexus: An Intelligent Integrated Platform for Studies and Career
Development is a comprehensive web-based application developed to support aca-
demic progression and professional preparation for NITK students. The platform in-
tegrates four major modules— Regular Course Track, Subject-Specific Course
Tracker,Community Forum and Placement and Higher Studies Roadmaps—to
centralize key academic and career resources into a single digital ecosystem.

## Features

### Frontend
- **Interactive Quiz**: A dynamic quiz with sliders, multi-step progress indicators, and visually appealing UI to gather user preferences and strengths.
- **Personalized Recommendations**: Based on quiz responses, users receive a detailed placement preparation plan, including:
  - Career path suggestions.
  - Recommended learning resources.
  - Weekly study timelines.
  - Additional tips for success.
- **ChatBot Assistant**: A conversational AI bot to assist users with placement queries, academic questions, and more.
- **Responsive Design**: Fully responsive UI for seamless usage across devices.

### Backend
- **AI-Powered Recommendations**: Utilizes a large language model (LLM) to generate personalized study plans and career paths.
- **Secure API**: Endpoints for quiz submission, recommendation generation, and user authentication.
- **Database Integration**: MongoDB for storing user data, quiz responses, and recommendations.

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Framer Motion (for animations)
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Axios (for API calls)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- A `.env` file with the following variables:
  ```
  GEMINI_API_KEY=<Your_Gemini_API_Key>
  MONGO_URI=<Your_MongoDB_Connection_String>
  ```

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/nitk-nexus.git
   cd nitk-nexus
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

4. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

5. Open the application in your browser at `http://localhost:3000`.

## Usage

1. **Take the Quiz**: Start by answering a series of questions about your interests, strengths, and preferences.
2. **View Recommendations**: Receive a personalized placement preparation plan, including career paths, study resources, and timelines.
3. **Chat with NexMentor**: Use the chatbot for additional guidance and support.
4. **Track Progress**: Follow the recommended study plan and achieve your placement goals.

## API Endpoints

### Quiz Submission
- **POST** `/api/recommendations/generate/:rollNo`
  - **Description**: Submits quiz answers and generates a personalized recommendation.
  - **Request Body**:
    ```json
    {
      "quizAnswers": {
        "interest": "Software Development",
        "strengths": ["Problem Solving", "Programming"],
        "preferred_work": "Fast-paced startup",
        "time_commitment": "10-15 hours"
      }
    }
    ```

### Fetch Recommendation
- **GET** `/api/recommendations/get/:rollNo`
  - **Description**: Fetches the saved recommendation for a user.

## Deployment

The project is deployed and accessible at:
[https://nitk-nexus-frontend.onrender.com](https://nitk-nexus-frontend.onrender.com)

## Contributing

We welcome contributions to improve NITK Nexus! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Thank you for using NITK Nexus! We hope it helps you achieve your placement goals.
