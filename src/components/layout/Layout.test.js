import { render } from "@testing-library/react";
import React from "react";
import Layout from "./Layout";

jest.mock("../header/Header", () => () => {
  return <div data-testid="header"></div>;
});

test("should render header and container", () => {
  const { getByTestId } = render(<Layout />);
  const headerComponent = getByTestId("header");

  expect(headerComponent).toBeInTheDocument();
});
