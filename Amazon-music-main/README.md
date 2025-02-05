
# Amazon Music Clone

## Project Overview

This project is a web application inspired by Amazon Music, built using React, Redux Toolkit, React Bootstrap, Spotify API, and Firebase Authentication. The application provides core features like user authentication, music browsing, playlist management, and search functionality.

## Key Features

    User authentication with Firebase
    Music browsing without login
    Playlist management and favorites
    Search functionality
    Redux Toolkit for state management
    React Bootstrap for UI components

## Tech Stack

    Frontend: React, Vite
    State Management: Redux Toolkit
    UI Framework: React Bootstrap
    API: Spotify API
    Authentication: Firebase
    

## Getting Started

    Clone the repository:
    git clone https://github.com/your-username/amazon-music-clone.git


  ### Install dependencies:

    cd amazon-music-clone
    npm install

  ### Set up environment variables:
    Create a .env file at the root of the project and add your Spotify API keys.
    VITE_CLIENT_ID=SPOTIFY_CLIENT_ID
    VITE_CLIENT_SECRET=SPOTIFY_CLIENT_SECRET
  

  ### Start the development server:
      npm run dev
      The application will be accessible at http://localhost:5173.

## Project Structure

    src: Contains the source code for the application.
        components: Reusable UI components and Pages.
        redux: ApiSlices and reducers
        store: Redux store configuration.
        utils: Firebase.js.
    public: Static assets like index.html.

## Deployment
  deployed on vercel
  https://amazon-music-ten.vercel.app/
