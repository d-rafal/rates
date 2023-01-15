import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../setupTests";
import CustomTimeRangeSelection, {
  MIN_ALLOWED_DATE,
} from "../components/CustomTimeRangeSelection";

describe("Element tests", () => {
  // arrange
  const user = userEvent.setup();

  const inputsSelectors = [
    { labelText: "start date", fieldName: "start-date" },
    { labelText: "end date", fieldName: "end-date" },
  ];

  inputsSelectors.forEach((inputSelector, index) => {
    it(`should show min date error for ${inputSelector.fieldName}`, async () => {
      // arrange
      const minDate = new Date(MIN_ALLOWED_DATE);
      minDate.setDate(minDate.getDate() - 1);

      render(<CustomTimeRangeSelection />);

      // act
      let messageError = screen.queryByText(
        `min: ${MIN_ALLOWED_DATE.toLocaleDateString("pl-PL")}`
      );
      expect(messageError).not.toBeInTheDocument();

      const dateInput = screen.getByRole("textbox", {
        name: new RegExp(inputSelector.labelText, "i"),
      });

      await user.type(dateInput, minDate.toLocaleDateString(), {});
      // screen.debug(startDateInput!);
      // logRoles(startDateInput);

      // assert
      expect(dateInput).toHaveValue(minDate.toLocaleDateString());

      messageError = screen.getByText(
        `min: ${MIN_ALLOWED_DATE.toLocaleDateString("pl-PL")}`
      );
      expect(messageError).toBeInTheDocument();
    });

    it(`should show invalid date error for ${inputSelector.fieldName}`, async () => {
      // arrange
      const { container } = render(<CustomTimeRangeSelection />);

      // act
      let messageError = screen.queryByText("Invalid date");
      expect(messageError).not.toBeInTheDocument();

      const dateInput = screen.getByRole("textbox", {
        name: new RegExp(inputSelector.labelText, "i"),
      });
      // screen.debug(startDateInput!);
      await user.type(dateInput, "12.32.2022", {});
      // screen.debug(startDateInput!);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      const errorMessage = container.querySelectorAll("p")[index];
      // logRoles(errorMessage);

      // assert
      expect(dateInput).toHaveValue("12.32.2022");
      expect(errorMessage).toHaveTextContent("Invalid date");
    });

    it(`should show future date error for ${inputSelector.fieldName}`, async () => {
      // arrange
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1);

      render(<CustomTimeRangeSelection />);

      // act
      const messageError = screen.queryByText("future date not allowed");
      expect(messageError).not.toBeInTheDocument();

      const dateInput = screen.getByRole("textbox", {
        name: new RegExp(inputSelector.labelText, "i"),
      });
      // screen.debug(startDateInput!);

      await user.type(dateInput, futureDate.toLocaleDateString(), {});
      // screen.debug();
      // logRoles(dateInput);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access

      // assert
      // await waitFor(() =>
      //   expect(
      //     screen.getByText("future date not allowed")
      //   ).toBeInTheDocument()
      // );
      await screen.findByText("future date not allowed");
      expect(dateInput).toHaveValue(futureDate.toLocaleDateString());
    });
  });

  it(`should trigger error message 'end date before start date' for end date input when start input modified`, async () => {
    // arrange
    const endDate = new Date(2022, 11, 20);

    const startDateBeforeEndDate = new Date(endDate);
    startDateBeforeEndDate.setDate(startDateBeforeEndDate.getDate() - 1);

    const startDateAfterEndDate = new Date(endDate);
    startDateAfterEndDate.setDate(startDateAfterEndDate.getDate() + 1);

    const { container } = render(<CustomTimeRangeSelection />);

    // act
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const endDateInput = screen.getByRole("textbox", {
      name: /end date/i,
    });
    const startDateInput = screen.getByRole("textbox", {
      name: /start date/i,
    });
    // logRoles(endDateInput);
    // screen.debug(startDateInput!);

    await user.type(endDateInput, endDate.toLocaleDateString(), {});
    expect(endDateInput).toHaveValue(endDate.toLocaleDateString());

    await user.type(
      startDateInput,
      startDateBeforeEndDate.toLocaleDateString(),
      {}
    );
    expect(startDateInput).toHaveValue(
      startDateBeforeEndDate.toLocaleDateString()
    );

    let messageError = screen.queryByText("End date before start date");
    expect(messageError).not.toBeInTheDocument();

    await user.pointer({
      target: startDateInput,
      keys: "[MouseLeft]",
    });

    await user.keyboard("{Control>}{a}{/Control}{Delete}");

    await user.type(
      startDateInput,
      startDateAfterEndDate.toLocaleDateString(),
      {}
    );
    expect(startDateInput).toHaveValue(
      startDateAfterEndDate.toLocaleDateString()
    );

    // screen.debug();
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    // const errorMessage = container.querySelectorAll("p")[index];
    // logRoles(errorMessage);

    // assert

    // await waitFor(() =>
    //   expect(errorMessage).toHaveTextContent("future date not allowed")
    // );
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    let errorMessage = container.querySelectorAll("p")[1];
    expect(errorMessage).toHaveTextContent("End date before start date");
    // await waitFor(() =>
    //   expect(errorMessage).toHaveTextContent("End date before start date")
    // );
  });
});
