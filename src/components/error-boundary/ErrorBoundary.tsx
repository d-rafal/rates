import * as React from "react";
import { OrNull } from "../../@types-and-const/@general";

const ErrorHandlingInEventsContext = React.createContext<
  (error: Error) => void
>(() => {
  throw new Error("ErrorHandlingInEventsContext without a Provider!");
});
ErrorHandlingInEventsContext.displayName = "ErrorHandlingInEventsContext";

interface ErrorBoundaryProps {
  renderOnError(error: Error): React.ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  readonly error: OrNull<Error>;
}

class ErrorBoundary extends React.Component<
  Readonly<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState;

  constructor(props: Readonly<ErrorBoundaryProps>) {
    super(props);
    this.state = { error: null };
    this.errorHandlingInEvents = this.errorHandlingInEvents.bind(this);
  }

  static getDerivedStateFromError(error: Error) {
    return { error: error };
  }

  componentDidCatch(error: Error) {
    console.error("error =", error);
  }

  errorHandlingInEvents(error: Error) {
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return <>{this.props.renderOnError(this.state.error)}</>;
    } else
      return (
        <ErrorHandlingInEventsContext.Provider
          value={this.errorHandlingInEvents}
        >
          {this.props.children}
        </ErrorHandlingInEventsContext.Provider>
      );
  }
}

export default ErrorBoundary;
export { ErrorHandlingInEventsContext };
