class AppError extends Error {
  constructor(name, httpCode, description, isOperational) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = name;
    this.httpCode = httpCode;
    this.description = description;
    this.isOperational = isOperational;

    console.error(
      `\n\n\n\n\[${this.name}]\ndescription: ${this.description}\nhttpCode: ${
        this.httpCode ?? "none"
      }\nisOperational: ${this.isOperational}\nstack trace: ${this.stack}`
    );
  }
}

export { AppError };
