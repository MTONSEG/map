## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   ```

2. Install dependencies for both the client and server:
   ```bash
   npm run full-install
   ```

## Running the application

To run both the client and server concurrently, use the following command:
```bash
npm run start
```

Alternatively, you can run the client and server separately:

- Start the server:
  ```bash
  npm run server
  ```

- Start the client:
  ```bash
  npm run client
  ```

By default, the server will run on `http://localhost:3000`.

## Build client

```bash
cd client
```

```bash
npm run build
```

## Auth key

- `unique-key`

## Project Structure

- `server/`: Contains the server-side code (Express and Socket.IO).
  - `routes/auth.js`: Handles authentication routes.
  - `utils/checkObjects.js`: Verifies the state of the objects.
  - `utils/initObjects.js`: Initializes the objects.
  - `utils/moveObjects.js`: Updates the movement of the objects.
  - `utils/getRandomInRange.js`: Generates a random value within a specified range.

- `client/`: Contains the client-side code.
  - `components/Layout.js`: Main layout component for the application.
  - `components/pages/Auth.js`: Authentication page where users can log in.
  - `components/pages/Map.js`: Map page displaying real-time positions of objects.
  - `components/ui/Loading.tsx:` Loading indicator component.
  - `components/widgets/SignIn.tsx`: Sign-in component for user authentication.
  - `components/widgets/SignOut.tsx`: Sign-out component for user logout.
  - `hooks/useConnectToObjects.js`: Custom hook for connecting to the Socket.IO server.
  - `services/authService.js`: Service for handling authentication-related API calls.
  - `store/auth.store.js`: MobX store for managing authentication state.
  - `store/object.store.js`: MobX store for managing objects' state.
  - `constants/index.js`: Contains application constants (e.g., paths).
  - `styles/global.scss`: Global styles for the application.

### Authentication
- `POST /auth/login`: Authenticates a user and returns a token.
- `POST /auth/register`: Registers a new user.

### Socket.IO Events
- `initialObjects`: Sent to the client upon connection with the current objects.
- `updateObjects`: Broadcasted every second with updated object positions.

## Additional Information

### Dependencies
- **Express**: Web server framework.
- **Socket.IO**: Handles real-time, bi-directional communication between clients and server.
- **CORS**: Middleware to handle cross-origin requests.
- **Concurrently**: Utility to run multiple commands concurrently.

### Environment Variables
- `PORT`: The port on which the server runs. Defaults to `3000`.

### Future Improvements
- Implement better object tracking and movement algorithms.
- Add user authentication and persistent sessions.
