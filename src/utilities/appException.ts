import { ReportedMessage } from "../@types-and-const/@general";

export class AppException extends Error {
  constructor(
    message: string,
    private _messageForUser: ReportedMessage["messageForUser"] = "Error occurred!",
    private _type: ReportedMessage["type"] = "error",
    private _autoHideDuration: ReportedMessage["autoHideDuration"] = 0
  ) {
    super(message);

    // Set the prototype explicitly.
    // only when you inherit from built-in types like Array, Error, Map, etc. and your compilation target is explicitly set to less then ES6/ES2015
    Object.setPrototypeOf(this, AppException.prototype);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppException);
    }
  }

  getMessageForUser() {
    return this._messageForUser;
  }
  getType() {
    return this._type;
  }
  getAutoHideDuration() {
    return this._autoHideDuration;
  }
}
