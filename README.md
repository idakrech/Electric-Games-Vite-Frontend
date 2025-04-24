
# ElectricGames Frontend

This is the frontend application for the ElectricGames platform. It is built with ReactJS and Vite, providing the user interface to interact with the backend API, which is hosted separately in the [ElectricGames API repository](https://github.com/idakrech/Electric-Games-API).

## Overview

The ElectricGames Frontend provides a user-friendly interface for showcasing games and characters from various platforms like Xbox, Playstation, and Nintendo Switch. It allows users to interact with game data, view characters, and manage the platform's content.

## Features

- **Game Information:**
  - Display game titles, platforms, release years, and images.
  - Search for games by title or ID.
  - Display detailed game information.
  
- **Game Characters:**
  - View character names, associated games, and character images.
  - Search for characters by name or ID.
  
- **User Interface:**
  - A responsive design, optimized for both desktop and mobile devices.
  - Built with ReactJS and Vite, using a component-based architecture for maintainability.
  - Integrated routing to navigate between different sections.

## Connecting to the Backend

The frontend connects to the backend API hosted at the following URL (replace with the appropriate environment variable or live URL):

- **Live API URL:** `https://electric-games-api-production.up.railway.app`

### To connect the frontend to the backend:
1. Ensure the backend API is running on a live server or locally.
2. Set the environment variable for the backend URL in the `.env` file. Example:
   ```
   VITE_API_URL=https://electric-games-api-production.up.railway.app
   ```
3. The frontend will use this API URL to fetch data from the backend.

## How to Use

To run the ElectricGames Frontend locally:

1. Clone this repository to your local machine.
2. Navigate to the project directory and install the dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file at the root of the project and add the backend URL:
   ```env
   VITE_API_URL=http://localhost:7265
   ```
   - For production, replace it with the live URL of the backend.

4. Start the frontend development server:
   ```bash
   npm run dev
   ```
5. Access the application in your web browser at `http://localhost:3000` (or the address specified in the `.env` file).

## Additional Information

- The frontend application fetches game and character data from the backend API.
- The backend API is located in a separate repository: [ElectricGames API](https://github.com/idakrech/Electric-Games-API).
  
## Credits

This project was developed by Ida Krech as part of the Web Development course at Kristiania University College and got grade A.
