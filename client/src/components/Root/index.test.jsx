import Root from "./index";
import { render, screen } from "@testing-library/react";

describe("Root component", () => {
  it("Render", () => {
    render(<Root />);
    expect(screen.getByTestId("page-header")).toBeInTheDocument();
    expect(screen.getByTestId("page-main")).toBeInTheDocument();
  });
});
