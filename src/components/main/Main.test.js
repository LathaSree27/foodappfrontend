import { getByTestId, render } from "@testing-library/react";
import Main from "./Main";
jest.mock("../router/RouteRouter", () => () => {
  return <div data-testid="router"></div>;
});
test("should render route router", () => {
  const { getByTestId } = render(<Main />);
  const routerComponent = getByTestId("router");

  expect(routerComponent).toBeInTheDocument();
});
