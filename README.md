# Invoice Manager Backend

Node.JS and MongoDB backend for the [invoice manager](https://github.com/KevinVanthuyne/invoice-manager).

## Local Setup

- Download and install [MongoDB](https://www.mongodb.com/)'s Community Server
    - It's easiest to install it as a Windows Service
- Download and install [Node.js](https://nodejs.org)
- Navigate to the root folder of the project in a terminal
    - Run `npm install`
    - Run `node index.js`

The API should now be available on http://localhost:3000/api.

### Notes

The backend will try to connect to MongoDB on the default port (`27017`).

For development it's easier to run `nodemon index.js` to automatically reload changes.

## Docker Setup

- Download and install [Docker](https://www.docker.com/)
- Navigate to the root folder of the project in a terminal
    - Run `docker build -t invoice-manager-backend .`
    - Run `docker run -p 3000:3000 invoice-manager-backend`