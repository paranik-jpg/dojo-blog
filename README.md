Dojo Blog

A simple blog application built using React, React Router, and json-server for local REST API simulation.
Features

    List blog posts

    View details for each post

    Create a new blog post

    Delete a blog post

    Custom 404 (Not Found) page

    Responsive, clean UI with Quicksand font and custom styles

Getting Started
Prerequisites

    Node.js (v16+ recommended)

    npm

Installation

    Clone the repository:

bash
git clone <your-repo-url>
cd dojo-blog

Install dependencies:

    bash
    npm install

Running the App in Development

This project uses two servers: one for the React app, and one for the mock API.
1. Start the API Server (json-server)

bash
npx json-server --watch db.json --port 8000

    This will make your blogs data available at http://localhost:8000/blogs

2. Start the React Development Server

In another terminal:

bash
npm start

    By default, this runs on http://localhost:3000

3. Configure API endpoint (Optional)

If needed, update your API endpoints in useFetch.js and other fetches from /api/blogs to match your backend setup (http://localhost:8000/blogs if using json-server directly).
Building for Production

bash
npm run build

Project Structure

    src/

        App.js – Main app with routing

        Navbar.js – Top navigation bar

        Home.js – Homepage listing blogs

        BlogList.js – Blog listing component

        BlogDetails.js – Single blog page with delete feature

        Create.js – Form to create a new blog post

        NotFound.js – Custom 404 page for unmatched routes

        useFetch.js – Custom React Hook for fetching data

        index.js – React entrypoint

        index.css – Main CSS styles

    db.json – Local database for blogs (used by json-server)

    vercel.json, server.js – For deployment on Vercel with API route rewriting

Customization

    Logos/Icons: Includes React-like logos (favicon.jpg, logo192.jpg, logo512.jpg) in the public/ folder and referenced in manifest.json.

    API Mock: Easily replace json-server with any API – just change fetch URLs.

Deployment (Vercel)

The included vercel.json and server configuration let you deploy this project as a serverless React app with an API backend. The API endpoints will be available under /api/blogs.
Scripts

    npm start – Runs the React development server

    npm run build – Builds the app for production

    npm test – Runs tests (if any)

    npm run eject – Use with caution: ejects from Create React App
