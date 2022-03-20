import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import axios from "axios";

jest.mock("axios");

const getMockedUsers = {
  data: [
    { id: 1, name: "testLeanne" },
    { id: 2, name: "testName" },
  ],
};

const getMockedTitle = {
  data: [{ id: 1, title: "mocked title" }],
};

describe("App component", () => {
  test("it displays a row for each user", async () => {
    let mockCall = axios.get.mockResolvedValue(getMockedUsers);
    const { debug, getByTestId, getAllByTestId, getByText } = render(<App />);

    expect(getByTestId("loader")).toBeInTheDocument;

    const ancestor = getByTestId("ancestor");
    const descendant = getByTestId("descendant");
    expect(ancestor).toContainElement(descendant); // thanks to @testing-library/jest-dom

    // debug() // print initial DOM
    expect(getByTestId("ancestor")).toHaveAttribute("role", "usersWrap"); // can check attr. thanks to @testing-library/jest-dom
    // wait for DOM to update after axios get
    await waitFor(() => getByTestId("user-list"));
    // debug() // print new DOM
    const fakeUsers = getAllByTestId("user-item");
    expect(fakeUsers).toHaveLength(2);
    // The mock function is called once
    expect(mockCall.mock.calls.length).toBe(1);
    // first argument of the first call
    expect(mockCall.mock.calls[0][0]).toBe(
      "https://jsonplaceholder.typicode.com/users"
    );

    mockCall = axios.get.mockResolvedValue(getMockedTitle);
    fireEvent.click(getByText("click me"));
    expect(mockCall.mock.calls.length).toBe(2);
    // first argument of the second call
    expect(mockCall.mock.calls[1][0]).toBe(
      "https://jsonplaceholder.typicode.com/users/1/posts"
    );
    await waitFor(() => getByText("mocked title"));
    // debug()
  });
});
