document.addEventListener("DOMContentLoaded", function () {
    // Function to send GET request to http://127.0.0.1:6942/posts
    function fetchData() {
        fetch("http://127.0.0.1:6942/posts")
            .then(response => response.json())
            .then(data => populateTable(data))
            .catch(error => console.error("Error fetching data:", error));
    }

    // Function to populate the table with data
    function populateTable(posts) {
        const dataTable = document.getElementById("dataBody");

        // Sort posts by ID in descending order
        posts.sort((a, b) => b.id - a.id);

        posts.forEach(post => {
            // Create a new row
            const row = dataTable.insertRow();

            // Add ID, Title, Views, and Date to the row
            row.insertCell(0).textContent = post.id;

            // Create a hyperlink for the title using innerHTML
            const titleCell = row.insertCell(1);
            titleCell.innerHTML = `<a href="/post/blog.html?id=${post.id}">${post.title}</a>`;

            row.insertCell(2).textContent = post.views;
            row.insertCell(3).textContent = post.date;
        });
    }

    // Call fetchData function when the page loads
    fetchData();
});
