import ShareItem from "./index";
import { render } from "@testing-library/react";

const mockData = {
  ticker: "AAPL",
  exchange: "NASDAQ",
  price: 279.29,
  change: 64.52,
  change_percent: 0.84,
  dividend: 0.56,
  yield: 1.34,
  last_trade_time: "2021-04-30T11:53:21.000Z",
};

describe("Share item component", () => {
  it("Render", () => {
    render(<ShareItem data={mockData} />);
  });
});
