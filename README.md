# FanBlog

A basic blog website that uses HTML, CSS, JS, and for the server side nodejs

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About

This project is a blog site with a sort of trendy look. It's made with HTML, CSS, and JS, so nothing too complex to edit and tinker with. I need to go on with the about, so I am going to talk about how it works. When the webpage is loaded, the script.js file sends a GET command to the Node.js server, which is commonly set to http://127.0.0.1:6942/posts. Then, it loads the JSON data it receives and sorts it from the greatest ID to the lowest ID, then sends it to the table on the webpage. While doing that, it creates a hyperlink to /posts/blog.html?id=<id> with the <id> replaced with the ID that corresponds with the title. When you click the hyperlink, you are sent to the respective blog post. When using a different JS file, it sends a GET command to http://127.0.0.1:6942/blogposts?id=<id> with searches and only sends the data that's with that ID. Then, the JS file sends it to the webpage to be displayed. And that's it. If you are reading all of this, you need to get looked at by a doctor because no one would be this interested in a project made by a random kid on the internet.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Download and Extract

- Click on the "Code" button and select "Download ZIP".
- Extract the downloaded ZIP file to your preferred location.

### 2. Host or Open

- Host the project on a web server or simply open the `index.html` file in your preferred web browser.

### 3. Open Terminal

- Open a terminal or command prompt on your machine.

### 4. Navigate to the Server Directory

- Navigate to the server directory using the `cd` command:
cd path/to/server

- Run the Node.js server:
node server.js

### The server say running of port 6942 and you all set

### Prerequisites

Nodejs 18 <br>
Apache or website server appcation <br>
That it to my understanding 🤷 

## Usage

There no real way to "post" to the blog you currently has to edit the data.json file in the server folder

## Contributing

Me and also Me

## License

This project is licensed under the [License Name] - see the [LICENSE.md](LICENSE.md) file for details.

