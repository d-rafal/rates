# Rate App

This **SPA** is a simple demonstration of usage some of react's environment libraries, such as:

- react
- redux (RTK Query)
- react-hook-form
- material-ui
- react-router
- jest/react-testing-library with Mock Service Worker (MSW)

It's based on **Create React App** environment configuration, fully
responsive and written in **Typescript**.

This app is using **NBP Web API** to display average rates of USD and EUR currencies

During tests and authentication process RESTful communication is mocked width "Mock Service Worker" library.

I will put an effort to progressively add new functionalities to this app, especially if they would cover usage of new libraries.

You can start playing with it by entering following user credentials:

- email: `user1@user.com`
- password: `123456`

Enjoy!

### Analyzing a code, you may find some useless comments. Normally I do not leave such things in production code, but this project I treat as a playground and own repository of some useful code.

If you don't have node.js installed you can run this app in docker container, below some useful commands:

- `docker compose -f ./docker-compose.prod.yml up -d`
- `docker compose -f ./docker-compose.prod.yml up -d --build`
- `docker compose -f ./docker-compose.prod.yml logs -f server`
