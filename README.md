### Backend service for Dealroom's fullstack assessment

This service exposes a single endpoint under path '/', which returns a single JSON file with all startup's data that will be processed in the frontend.

#### Quick start

```
npm install

npm run dev
```

#### Description

This service was built using [Fastify](https://fastify.dev/). I chose Fastify mostly because it provides a simple API to build something quickly and because I wanted to dive a bit deeper into it since I usually use Express.

#### Deployment

This service is deployed using [Fly.io](https://fly.io/), which I chose since its CLI makes it really easy to deploy from already existing code without having to setup anything manually, it does most of the work by itself. It also comes integrated with monitoring and logging which was already helpful for troubleshooting some configuration issues during setup, and lastly because it offers a free plan, which is very practical for quick projects like this one.

You can access the deployed endpoint [here](https://guillermo-fullstack-assessment-backend.fly.dev/), logs are only accessible via accessing through my account but I can show that later on.

#### Testing

```
npm run test
```

I used Jest and Fastify's native API for creating integration testing for only two scenarios: a successful request and a mock case of the app throwing on an incoming request.