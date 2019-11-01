# Sky Betting & Gaming Tech Test

## Technology Choices

This application is built using `React` as this is my preferred framework for building UI components, particularly when the underlying data can update in real time. I also chose to use `Redux` as this provided an interface for the websocket listener to update the React application's state. To get up & running as quickly as possible, the project is bootstrapped using `create-reat-app`. As a result, testing is implemented using `Jest` & `Enzyme` to make the most use of this boilerplate.

I chose to use the standard browser `WebSocket` API rather than a library such as `Socket.IO` as it is widely supported and the requirements are relatively straightforward.

Due to time constraints, I was unable to focus much on the design of the application. In the interest of implementing maximum functionality in a short space of time I used `react-bootstrap` as it provides a wide variety of components that I find useful for prototyping.

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

If I had more time I would like to implement the subcription functionality of the Websocket API. This would let me selectively update the state of the application and rerender markets/outcomes in real time.

I would also like to spend more time implementing some of the functionality outlined in the background document. In particular, filtering out any markets with no displayable outcomes/events with no displayable markets etc.

Finally I would like to do a swap out the Bootstrap components for a custom design libray.
