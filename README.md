# Sky Betting & Gaming Tech Test

## Technology Choices

This application is built using React as this is my preferred framework for building UI components, particularly when the underlying data can update in real time. I also chose to use Redux as this provided an interface for the websocket listener to update the React application's state. Due to the relatively simple requirements for the websocket, I chose to use the standard browser WebSocket API rather than a library such as Socket.IO, although more complex features may suit this.

## Getting Started

Requirements

-   Docker
-   `docker-compose`

For reference this application/documentation uses `yarn` however `npm` is also compatible.

-   To launch the API run `docker-compose up`.
-   To launch the application run `yarn start`.

## Testing

To execute the test suite, run `yarn test`.

## Future Work

TODO
