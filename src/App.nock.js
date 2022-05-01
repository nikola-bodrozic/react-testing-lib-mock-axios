import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import nock from "nock";
import App from "./App";

afterEach(cleanup);
afterEach(nock.cleanAll);
afterAll(nock.restore);

test("should render User component - mock async fetch data", async () => {
  nock("https://jsonplaceholder.typicode.com")
    .defaultReplyHeaders({
      "Access-Control-Allow-Origin": "*",
    })
    .get("/users")
    .reply(200, [
      { id: 1, name: "testLeanne" },
      { id: 2, name: "testName" },
    ]);

  // render Loading...
  const { getByText, debug } = render(<App />);
  expect(getByText("Loading...")).toBeInTheDocument();
  //debug()

  // after call to nock
  await waitFor(() => {
    expect(getByText("testLeanne")).toBeInTheDocument();
    expect(getByText("testName")).toBeInTheDocument();
  });
  //debug()
});
