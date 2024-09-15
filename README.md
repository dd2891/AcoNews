ACONEWS
ACONEWS is a responsive news web app powered by the GNews API, which delivers the latest news articles and allows users to search for specific topics. The app is built with React for the frontend, Express for the backend, and hosted on Firebase.

Table of Contents
Project Overview
Features
Technologies
Setup Instructions
Approach
Challenges and Solutions
Project Overview
ACONEWS provides users with a clean, user-friendly interface to browse news from various categories, search for specific topics, and read detailed news articles. The app is fully responsive, ensuring a great user experience across devices, including mobile, tablet, and desktop.

Features
Display of the latest news from GNews.
Search functionality for querying news articles.
Filter news by categories.
Responsive design for multiple screen sizes.
Single-page application (SPA) for smooth navigation.
Technologies
Frontend: React, Axios, CSS (or Tailwind CSS for responsive design)
Backend: Node.js, Express.js, Axios
Hosting: Firebase Hosting
API: GNews API
Setup Instructions
Prerequisites
Node.js
Firebase CLI
GNews API Key (sign up at gnews.io)
Backend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/aconews.git
cd aconews-backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root of the backend directory and add your GNews API key:

makefile
Copy code
GNEWS_API_KEY=your_gnews_api_key
Start the backend server:

bash
Copy code
node index.js
The backend will run on http://localhost:5000.

Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd ../aconews-frontend
Install dependencies:

bash
Copy code
npm install
Build the React app for production:

bash
Copy code
npm run build
Firebase Hosting Setup
Make sure Firebase CLI is installed and you are logged in:

bash
Copy code
npx firebase-tools login
Initialize Firebase Hosting:

bash
Copy code
npx firebase-tools init hosting
Select your Firebase project and set build as the public directory.

Deploy the app:

bash
Copy code
npx firebase-tools deploy
Approach
Frontend
We used React to build the frontend because of its modular structure, reusable components, and ability to handle dynamic content efficiently.
Axios was used to handle API requests to fetch news from the GNews API.
CSS was used to ensure a fully responsive UI, making the site adaptable to mobile, tablet, and desktop layouts. Optionally, Tailwind CSS could be used to simplify responsive design with utility classes.
Backend
The backend was built with Node.js and Express to handle API requests. The Express server pulls data from the GNews API and serves it to the frontend.
Axios was used to make HTTP requests to the GNews API, and caching was considered to optimize API usage given the free tier's limitations.
Firebase Hosting
Firebase was chosen for hosting because of its easy deployment process and free tier, which is perfect for small projects.
Firebase CLI was used to handle deployments and manage the hosting of both the frontend and backend.
