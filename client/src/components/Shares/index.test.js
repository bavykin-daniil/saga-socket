import Shares from "./index";
import { render, screen } from "@testing-library/react";

describe("Shares component", () => {
  it("Render ", () => {
    render(<Shares />);
    expect(
      screen.getByText(/Maybe it will be interested for you ?/i)
    ).toBeInTheDocument();
  });
});
