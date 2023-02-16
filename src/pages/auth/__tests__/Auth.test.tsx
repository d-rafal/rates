import userEvent from "@testing-library/user-event";
import { sampleUserCredentials } from "../../../mocks/authHandler";
import { AppRoutes } from "../../../routes/AppRoutes";
import { configure, render, screen } from "../../../setupTests";
import Auth from "../Auth";

describe("Auth tests", () => {
  beforeAll(() => {
    configure({ asyncUtilTimeout: 2000 });
  });

  afterAll(() => {
    configure({ asyncUtilTimeout: 1000 });
  });

  it("should login user", async () => {
    // arrange
    const user = userEvent.setup();
    render(<AppRoutes />, {
      initialRoutes: ["/login"],
    });

    const emailInput = screen.getByRole("textbox", { name: /email address/i });
    const passwordInput = screen.getByLabelText(/^password \*$/i);
    const rememberMe = screen.getByRole("checkbox", { name: /remember me/i });
    const signInButton = screen.getByRole("button", { name: /^sign in$/i });

    //act

    // assert
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveFocus();
    await user.type(emailInput, sampleUserCredentials.email, {
      skipClick: true,
    });

    expect(passwordInput).toBeInTheDocument();
    await user.type(passwordInput, sampleUserCredentials.password);

    expect(rememberMe).toBeInTheDocument();
    expect(rememberMe).not.toBeChecked();
    await user.pointer({ keys: "[MouseLeft]", target: rememberMe });
    expect(rememberMe).toBeChecked();

    expect(signInButton).toBeInTheDocument();
    await user.pointer({ keys: "[MouseLeft]", target: signInButton });

    expect(await screen.findByText(/^select criteria$/i)).toBeInTheDocument();
  });

  it("should show wrong email indication", async () => {
    // arrange
    const user = userEvent.setup();
    render(<Auth />);

    const emailInput = screen.getByRole("textbox", { name: /email address/i });
    const passwordInput = screen.getByLabelText(/^password \*$/i);
    const rememberMe = screen.getByRole("checkbox", { name: /remember me/i });
    const signInButton = screen.getByRole("button", { name: /^sign in$/i });

    //act

    // assert

    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveFocus();
    await user.type(emailInput, sampleUserCredentials.email.replace("1", "2"), {
      skipClick: true,
    });

    expect(passwordInput).toBeInTheDocument();
    await user.type(passwordInput, sampleUserCredentials.password);

    expect(rememberMe).toBeInTheDocument();
    expect(rememberMe).not.toBeChecked();
    await user.pointer({ keys: "[MouseLeft]", target: rememberMe });
    expect(rememberMe).toBeChecked();

    expect(
      screen.queryByText(/^Incorrect email address/i)
    ).not.toBeInTheDocument();

    expect(signInButton).toBeInTheDocument();
    await user.pointer({ keys: "[MouseLeft]", target: signInButton });

    expect(
      await screen.findByText(/^Incorrect email address/i)
    ).toBeInTheDocument();
  });
});
