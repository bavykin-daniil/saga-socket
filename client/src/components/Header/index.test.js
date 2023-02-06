import Header from "./index";
import { render, screen } from "@testing-library/react";

describe("Header component", () => {
  it("Render", () => {
    render(<Header />);
    expect(screen.getByText(/finance board/i)).toBeInTheDocument();
  });
});
