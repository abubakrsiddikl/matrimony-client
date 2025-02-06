# Matrimony Platform

![Lost & Found Screenshot](https://i.ibb.co.com/0y71gQVG/Screenshot-from-2025-02-06-23-08-01.png)  

## Project Overview

The Matrimony Platform is a matchmaking web application built using the MERN stack (MongoDB, Express, React, Node.js). It offers a modern, user-friendly interface that helps users connect with potential life partners. Core functionalities include biodata creation, success story sharing, secure authentication, and powerful search and filter options.

## Screenshot

(Provide a screenshot link or attach an image)

## Technologies Used

**Frontend:**

*   React.js
*   Tailwind CSS
*   Flowbite

**Backend:**

*   Express.js

**Database:**

*   MongoDB

**Tools and Libraries:**

*   TanStack Query: For optimized data fetching
*   JWT Authentication: Secure user authentication
*   FormData API: Handling file uploads

## Core Features

*   **User Authentication:** Secure login/signup with JWT and HTTP-only cookies
*   **Biodata Management:** Create, edit, and manage detailed profiles
*   **Search and Filter:** Find potential matches using various criteria
*   **Success Stories:** Share and view user success stories
*   **Image Uploads:** Upload user photos using FormData API
*   **Admin Dashboard:** Efficient management of user data and site content
*   **Responsive Design:** Built with Tailwind CSS and Flowbite for a seamless experience

## Dependencies

**Backend Dependencies:**

*   Express.js: Fast, unopinionated, and minimalist backend framework
*   MongoDB: NoSQL database
*   JWT Authentication: Secure token-based authentication

**Frontend Dependencies:**

*   React.js: Declarative UI framework
*   Tailwind CSS: Utility-first CSS framework
*   Flowbite: UI component library
*   TanStack Query: Data-fetching and state management library

## How to Run the Project Locally

**Backend Setup:**

1.  Clone the backend repository:

    ```bash
    git clone [https://github.com/abubakrsiddikl/matrimony-server.git](https://github.com/abubakrsiddikl/matrimony-server.git)
    cd server
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Create a `.env` file with the following variables:

    ```bash
    PORT=5000
    MONGO_URI=your_mongo_db_uri
    JWT_SECRET=your_jwt_secret
    ```

4.  Start the server:

    ```bash
    npm run start
    ```

**Client Setup:**

1.  Clone the client repository:

    ```bash
    git clone [https://github.com/abubakrsiddikl/matrimony-client.git](https://github.com/abubakrsiddikl/matrimony-client.git)
    cd client
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Configure the backend API URL in `.env.local`:

    ```bash
    REACT_APP_API_BASE_URL=http://localhost:5000
    ```

4.  Start the development server:

    ```bash
    npm start
    ```

## Live Project and Resources

*   **Live Project:** [Visit the Live Site](https://matrimony-5930a.web.app/)
*   **Client Repository:** [Matrimony Client](https://github.com/abubakrsiddikl/matrimony-client.git)
*   **Backend Repository:** [Matrimony Server](https://github.com/abubakrsiddikl/matrimony-server.git)