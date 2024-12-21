const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5500;

// Middleware
app.use(cors());
app.use(express.json());

// Hardcoded OpenAI API key
const openaiApiKey = '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';  // Replace with your actual OpenAI API key

// Route to handle user input and get GPT response
app.post('/get-response', async (req, res) => {
  const userInput = req.body.input;

  try {
    // Send the request to OpenAI API (using the newer gpt-3.5-turbo model)
    const openaiResponse = await axios.post(
      'https://api.openai.com/v1/chat/completions',  // Updated endpoint
      {
        model: 'gpt-3.5-turbo',  // Using the gpt-3.5-turbo model
        messages: [{ role: 'user', content: userInput }],  // The API expects a "messages" field now
        max_tokens: 150,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,  // Hardcoded API key
          'Content-Type': 'application/json'
        }
      }
    );

    // Send the response back to the frontend
    res.json({ message: openaiResponse.data.choices[0].text.trim() });

  } catch (error) {
    console.error('Error fetching GPT response:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Error fetching GPT response' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
