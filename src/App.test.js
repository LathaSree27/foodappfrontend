import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./components/layout/Layout", () => () => {
  return <div data-testid="layout"></div>;
});

test("check whether the layout is present on screen", () => {
  const { getByTestId } = render(<App />);
  const layoutElement = getByTestId("layout");

  expect(layoutElement).toBeInTheDocument();
});
