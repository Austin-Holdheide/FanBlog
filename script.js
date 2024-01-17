// Replace 'your_server_url' with the actual URL of the server you want to send the GET request to
const serverUrl = 'localhost:5000';

// Sending a GET request using the fetch API
fetch(serverUrl, {
  method: 'GET', // Specify the request method
  headers: {
    'Content-Type': 'application/json', // Specify the content type if needed
    // You can add other headers as needed
  },
  // You can include other options like credentials, mode, etc.
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    // Handle the data received from the server
    console.log('Response data:', data);
  })
  .catch(error => {
    // Handle errors that occur during the fetch
    console.error('Fetch error:', error);
  });
