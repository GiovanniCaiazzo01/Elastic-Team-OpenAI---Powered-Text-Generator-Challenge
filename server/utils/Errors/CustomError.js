class AppError extends Error {
  constructor(name, httpCode, description, isOperational) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = name;
    this.httpCode = httpCode;
    this.description = description;
    this.isOperational = isOperational;

    console.error(
      `[${this.name}]\ndescription: ${this.description}\nisOperational: ${
        this.isOperational
      }\nhttpCode: ${this.httpCode ?? "none"}`
    );
  }
}

export { AppError };
