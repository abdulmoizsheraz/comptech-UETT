# comptech Project README

Welcome to the comptech project! This README will guide you through the steps to clone the repository and set up the Vite application for  frontend .


#End Points of a Server

##Event Endpoints
Create Event

POST /api/events
Create a new event.
Get All Events

GET /api/events
Retrieve all events.
Get Event by ID

GET /api/events/:id
Retrieve a specific event by ID.
Update Event by ID

PUT /api/events/:id
Update a specific event by ID.
Delete Event by ID

DELETE /api/events/:id
Delete a specific event by ID.
##User Endpoints
Create User

POST /api/users
Create a new user.
Get All Users

GET /api/users/:id
Retrieve a specific user by ID.
Update User by ID

PUT /api/users/:id
Update a specific user by ID.
Delete User by ID

DELETE /api/users/:id
Delete a specific user by ID.



## Cloning the Repository
To clone the repository, follow these steps:
1. Open your terminal.
2. Navigate to the directory where you want to store the project.
3. Run the following command:
    ```bash
    git clone https://github.com/RMWajahat/Comptech.git .
    ```

## Setting Up Frontend
The frontend folder is also located within the comptech folder. Follow these steps to set up the frontend:
1. Navigate to the frontend folder:
    ```bash
    cd comptech/frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the Vite development server:
    ```bash
    npm run dev
    ```
   This command will start the Vite development server for the frontend.

## Accessing the Application
Once frontend server is running, you can access the application through your web browser. By default, the frontend will be available at `http://localhost:5173`.

## Additional Notes
- Ensure that Node.js and npm are installed on your system before running the commands.
