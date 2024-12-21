// Add event listener for the send button
document.getElementById('send-btn').addEventListener('click', async function () {
  const userInput = document.getElementById('user-input').value;

  if (userInput) {
    // Display user input in the chat history
    document.getElementById('chat-history').innerHTML += `
      <div class="message user-message">
        <strong>User:</strong> ${userInput}
      </div>
    `;

    // Send the user input to the back-end server for processing
    try {
      // Make a POST request to your backend server
      const response = await fetch('http://localhost:5500/get-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: userInput })  // Sending user input to the server
      });

      const data = await response.json();  // Parsing the JSON response from the server

      if (data.message) {
        // Display the response from GPT in the chat history
        document.getElementById('chat-history').innerHTML += `
          <div class="message bot-message">
            <strong>Enzo:</strong> ${data.message}
          </div>
        `;
      } else {
        // Display error message if no valid response from the backend
        document.getElementById('chat-history').innerHTML += `
          <div class="message bot-message">
            <strong>Enzo:</strong> Sorry, something went wrong.
          </div>
        `;
      }

    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
      document.getElementById('chat-history').innerHTML += `
        <div class="message bot-message">
          <strong>Enzo:</strong> Failed to get response from the server.
        </div>
      `;
    }

    // Clear the input field after sending the message
    document.getElementById('user-input').value = '';
  }
});
