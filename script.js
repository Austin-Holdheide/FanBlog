// Replace 'your_server_url' with the actual URL of the server you want to send the GET request to
const serverUrl = 'http://127.0.0.1:6942/posts';

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

        // Sort posts array by ID in descending order
        const sortedPosts = data.posts.sort((a, b) => b.id - a.id);

        // Update content in the side-box
        blogPostTitleElement.textContent = 'Blog Post';

        // Update table content for each post
        sortedPosts.forEach(post => {
            const newRow = dataBodyElement.insertRow();
            const idCell = newRow.insertCell(0);
            const titleCell = newRow.insertCell(1);
            const viewsCell = newRow.insertCell(2);
            const dateCell = newRow.insertCell(3);

           // const aTag = new Element("a");
           // aTag.href = `posts/blog.html?id=${post.id}`;
          //  aTag.textContent = post.title;

           // titleCell.childElement = aTag;

            idCell.textContent = post.id;
            titleCell.innerHTML = `<a href="posts/blog.html?id=${post.id}">${post.title}</a>`;
            // Add views data if available
            viewsCell.textContent = post.views || 'N/A';
            dateCell.textContent = post.date;

            // Add faint line between entries
            dataBodyElement.innerHTML += '<tr><td colspan="3" class="entry-divider"></td></tr>';
        });

        // Add ellipsis if content overflows
        const sideBox = document.getElementById('sideBox');
        if (sideBox.scrollHeight > sideBox.clientHeight) {
            sideBox.classList.add('overflowed');
        }
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });