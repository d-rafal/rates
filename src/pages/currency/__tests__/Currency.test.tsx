import { render, screen } from "../../../setupTests";
import Currency from "../Currency";
import userEvent from "@testing-library/user-event";

describe("Currency tests", () => {
  it("should render actual USD rate", async () => {
    // arrange
    render(<Currency />);

    //act

    // assert
    expect(
      await screen.findByRole("heading", {
        name: /actual rate usd\/pln: 4\.8343 zł\./i,
      })
    ).toBeInTheDocument();
  });

  it("should change to EUR and render actual rate", async () => {
    // arrange
    const user = userEvent.setup();

    render(<Currency />);

    //act
    // const selectCurrency = screen.getByLabelText(/^select currency$/i);
    const selectCurrency = screen.getByRole("button", {
      name: /select currency usd/i,
    });
    await user.pointer({ keys: "[MouseLeft]", target: selectCurrency });

    // const selectEurCurrency = await screen.findByText(/^EUR$/i);
    const selectEurCurrency = await screen.findByRole("option", {
      name: /eur/i,
    });
    await user.pointer({ keys: "[MouseLeft]", target: selectEurCurrency });

    // assert
    expect(
      await screen.findByRole("heading", {
        name: /actual rate eur\/pln: 4\.7758 zł\./i,
      })
    ).toBeInTheDocument();
  });
});
