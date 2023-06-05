# Galaxy Quest

An application for exploring data in the browser.

## Development Setup

This project was generated with Angular CLI version 16.0.4. See the
[Angular CLI documentation](https://angular.io/cli) for usage.

### Prerequisites

- Install a [Node.js](https://nodejs.org) which includes [Node Package Manager](https://docs.npmjs.com/getting-started)

Optional but recommended:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) which includes [Docker Compose](https://docs.docker.com/compose/)

### Getting Started

Install project dependencies:

```shell
npm install
```

Run the application:

```shell
npm start
```

> You can also run the application using Docker with Compose:
>
> ```shell
> docker-compose up
> ```

### Building for Production

Build artifacts for direct distribution:

```shell
npm run build
```

Build container image:

```shell
docker build -t galaxyquest:latest .
```
