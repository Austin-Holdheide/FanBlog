// Replace 'your_server_url' with the actual URL of the server you want to send the GET request to
const serverUrl = 'http://127.0.0.1:5000/posts';

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
        const blogPostTitleElement = document.getElementById('blogPostTitle');
        const dataBodyElement = document.getElementById('dataBody');
        const blogPostElement = document.getElementById('blogPost');

        // Update content in the side-box
        blogPostTitleElement.textContent = 'Blog Post';

        // Update table content
        const newRow = dataBodyElement.insertRow();
        const idCell = newRow.insertCell(0);
        const titleCell = newRow.insertCell(1);
        const viewsCell = newRow.insertCell(2);
        const dateCell = newRow.insertCell(3);

        titleCell.textContent = data.title;
        // Add views data if available
        viewsCell.textContent = data.views || 'N/A';
        dateCell.textContent = data.date;

        // Add faint line between entries
        dataBodyElement.innerHTML += '<tr><td colspan="3" class="entry-divider"></td></tr>';

        // Add ellipsis if content overflows
        const sideBox = document.getElementById('sideBox');
        if (sideBox.scrollHeight > sideBox.clientHeight) {
            sideBox.classList.add('overflowed');
        }

        // Hyperlink the title to post.html with the post ID
        blogPostElement.href = `post.html?id=${data.id}`;
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
