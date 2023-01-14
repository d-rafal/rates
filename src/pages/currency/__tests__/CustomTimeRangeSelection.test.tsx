import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../setupTests";
import CustomTimeRangeSelection from "../components/CustomTimeRangeSelection";

describe("Element tests", () => {
  // arrange

  it("should show error date", async () => {
    // arrange
    const user = userEvent.setup();

    // act

    const { container } = render(<CustomTimeRangeSelection />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const startDateInput = container.querySelector("#\\:r0\\:");

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();

    // assert
    expect(startDateInput).toBeInTheDocument();

    await user.type(startDateInput!, "12122002", {});

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug(startDateInput!);

    const errorMessage = screen.getByText("start-date is not James");

    expect(errorMessage).toBeInTheDocument();

    expect(startDateInput).toHaveValue("12.12.2002");
  });
});
