import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./components/main/Main", () => () => {
  return <div data-testid="main"></div>;
});

test("check whether the layout is present on screen", () => {
  const { getByTestId } = render(<App />);
  const mainComponent = getByTestId("main");

  expect(mainComponent).toBeInTheDocument();
});
