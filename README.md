# react-next-app

Repository for test code of React (NextJS) News and Weather Application. This application uses NextJS, React, Bootstrap4, and other dependencies. Node-sass is also used here to automatically compile SCSS file. For more specific information about this project please check the `package.json` file.

### Clone the project

```
git clone git@github.com:gundwiguna/react-next-app.git
```

or

```
git clone https://github.com/gundwiguna/react-next-app.git
```

### Install all dependencies
1. Install node.js
2. Go to inside directory `react-next-app` and run install command

```
npm install
```

### Run the application

```
npm run dev
```

This command will run the development server in localhost:3000

### Run the testing

```
npm run test
```

Currently, the unit testing scripts are only available to make sure the open API used in this project is working.

### Application Features

1. Fetch weather information in your location (default)
2. Fetch weather information by given city name
3. Fetch up to 20 top headline news in United States

### Open API

1. API to fetch weather information by OpenWeatherMap: https://openweathermap.org/current#current_JSON
2. API to fetch headline news by NewsApi: https://newsapi.org/docs/endpoints/top-headlines
