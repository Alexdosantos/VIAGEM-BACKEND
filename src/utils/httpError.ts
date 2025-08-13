export class HttpError extends Error {
  status: number;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.status = statusCode;
  }
}
