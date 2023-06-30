class AppError {
  constructor(name, httpCode, description, isOperational) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.name = name;
    this.httpCode = httpCode;
    this.description = description;
    this.isOperational = isOperational;
    //...other properties assigned here
  }
}

export { AppError };
