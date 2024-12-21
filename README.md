Enzo - AI Chatbot Browser Extension
Enzo is an intelligent AI-powered chatbot designed to provide seamless user interaction. Built as a browser extension, Enzo leverages advanced natural language processing (NLP) technologies to understand and respond to user queries, making it a versatile and efficient tool for users who want quick access to information and support. Whether you're looking for answers, engaging in casual conversation, or need assistance navigating the web, Enzo is here to help.

Features
AI-powered chatbot: Engages with users using natural language understanding (NLU).
Context-aware: Remembers past interactions and provides relevant responses.
Fast and responsive: Instant answers to questions or requests.
Easy-to-use interface: A simple, user-friendly chat interface embedded directly in your browser.
Cross-platform support: Compatible with modern web browsers.
Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: React, Java (for API integration)
AI Integration: Uses Wit.ai API for natural language understanding and processing.
How to Install Enzo Extension
Step 1: Clone the Repository
First, clone the Enzo repository from GitHub (or download the project files from your source).
bash
Copy code
git clone https://github.com/Manav9495/Enzo-2.0.git
Step 2: Install Dependencies
Backend (Server) Setup:

Navigate to the backend folder inside the Enzo project directory.
Install the necessary dependencies by running:
bash
Copy code
npm install
Frontend (Extension) Setup:

Navigate to the frontend folder inside the project directory.
Make sure to install the necessary dependencies:
bash
Copy code
npm install
Step 3: Configure Backend
In the server.js file inside the backend folder, make sure to configure your Wit.ai API key.

Replace the placeholder YOUR_WIT_AI_API_KEY with your actual API key from Wit.ai.
javascript
Copy code
const WIT_ACCESS_TOKEN = 'YOUR_WIT_AI_API_KEY'; // Replace with your Wit.ai token
After updating the configuration, you can start the backend server:

bash
Copy code
node server.js
The server will now be running on http://localhost:3000.

Step 4: Load the Extension in Your Browser
Open your browser and navigate to the Extensions page:

Chrome: chrome://extensions/
Firefox: about:addons
Edge: edge://extensions/
Enable Developer mode (if not already enabled).

Click Load Unpacked and select the frontend folder where the extension files (popup.html, background.js, etc.) are located.

The extension should now be loaded in your browser.

Step 5: Start Using Enzo
You should now see the Enzo chatbot icon in your browser's toolbar.
Click on the Enzo icon to start interacting with the chatbot.
The chatbot will communicate with the backend server, which will relay the messages to the Wit.ai API and respond with the relevant answers.
Troubleshooting
Server Not Responding: Ensure that the backend server is running correctly by checking the console for any error messages. Restart the server if necessary.
API Issues: Make sure that your Wit.ai token is valid and properly configured in the server.js file.
CORS Errors: If you encounter CORS issues while interacting with the server, ensure that you've enabled CORS in the backend using the cors middleware:
javascript
Copy code
const cors = require('cors');
app.use(cors());
