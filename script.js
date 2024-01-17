// Replace 'your_server_url' with the actual URL of the server you want to send the GET request to
const serverUrl = 'http://127.0.0.1:5000';

fetch(serverUrl, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const titleElement = document.getElementById('title');
        const dateElement = document.getElementById('date');

        // Update content in the side-box
        titleElement.textContent = data.title;
        dateElement.textContent = `Date: ${data.date}`;

        // Add ellipsis if content overflows
        const sideBox = document.getElementById('sideBox');
        if (sideBox.scrollHeight > sideBox.clientHeight) {
            sideBox.classList.add('overflowed');
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
