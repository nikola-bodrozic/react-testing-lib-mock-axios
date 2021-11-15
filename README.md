# ReactJS & React Testing Library with code coverage

Mock Axios call. useEffect useState useContext Hook. Context with function and initial value. Context in functional component. Context in class component. Debug and print DOM.

## Developer Machine

Instal dependancies

`yarn`

run test in watch mode

`yarn test`

run test in CI mode

`CI=true yarn test`

## Docker

```shell
docker build -f Dockerfile -t react:1.0 .
docker run -it --name react -v $(pwd):/app -v /app/node_modules -e CHOKIDAR_USEPOLLING=true -p 3000:3000 react:1.0
docker exec -it react ash
```

