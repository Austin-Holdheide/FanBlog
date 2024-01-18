document.addEventListener("DOMContentLoaded", function () {
    const sideBoxElement = document.getElementById('sideBox');

    // Get the ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    // Replace 'your_server_url' with the actual URL of the server you want to send the GET request to
    const serverUrl = `http://127.0.0.1:6942/blogposts?id=${postId}`;

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
            // Update content in the side-box
            const postTitleElement = document.createElement('h2');
            postTitleElement.textContent = data.title;
            sideBoxElement.appendChild(postTitleElement);

            // Add author name
            const authorElement = document.createElement('p');
            authorElement.textContent = `by: ${data.author}`;
            authorElement.style.color = '#888'; // Lighter gray color
            sideBoxElement.appendChild(authorElement);

            // Add text content with auto line breaking
            const textElement = document.createElement('p');
            textElement.textContent = data.text;
            textElement.style.whiteSpace = 'pre-line'; // Preserve line breaks
            sideBoxElement.appendChild(textElement);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
});
