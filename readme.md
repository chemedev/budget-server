-   [About the Project](#about-the-project)
    -   [Built With](#built-with)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Contact](#contact)

## About The Project

This project consists of an API REST with Nodejs, Express microframework, a PostgreSQL database and layout done with Reactjs

### Built With

-   [CRA](https://create-react-app.dev/)
-   [Node.js](https://nodejs.org/en/)

## Getting Started

To initialize project you must already have Nodejs and PostgreSQL on your system.
Alternatively, docker files are provided.

### Prerequisites

-   npm

```sh
npm install npm@latest -g
```

### Installation

1.  Clone the API repository

```sh
git clone https://github.com/me-chell/budget-server
```

2. Install dependencies

```sh
npm install
```

3. Edit PostgreSQL connection on `.env` file or initialize with container.

```JS
POSTGRES='ENTER_YOUR_CONNECTION_CREDENTIALS'
```

4. Create sql schema with database/dbSchema.sql file, it counts with a few categories preloaded to test the app.

5. Start server.

```sh
npm start
```

## Contact

Juan Chemello - [@mechell_dev](https://twitter.com/mechell_dev) - juanchemell@gmail.com

Project Link: [https://github.com/me-chell/budget-server](https://github.com/me-chell/budget-server)
