# Post Management Application

A React-Redux application for managing posts, including fetching and adding posts via a REST API.

## Features

- Fetch posts from an external API (`jsonplaceholder.typicode.com`).
- Add new posts with a title and body.
- Display posts in a user-friendly list.
- Modal popup form to add a new post.

## Technologies

- **React.js**: A JavaScript library for building user interfaces.
- **Redux**: A state management library for React applications.
- **Redux Thunk**: Middleware for handling asynchronous actions in Redux.
- **Axios**: Promise-based HTTP client for making API requests.
- **CSS**: For styling the components.

## Installation

To set up the project on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/pvanquochuy/seta-test.git

   ```

2. **Navigate to the project directory:**
   cd .\react-redux-app

3. **Install dependencies:**
   npm install
4. **Run the application:**
   npm start

The application will be available at http://localhost:3000.

## Usage:

Add Post: Click the Add Post button to open the modal form. Fill in the title and body of the post and submit it to add the post to the list.
View Posts: All fetched posts from the external API will be displayed in a list below the header.
Loading and Error Handling: If posts are still loading or an error occurs, appropriate messages will be displayed.
