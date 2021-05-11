export class AppError {
  public readonly statusCode: number;

  constructor(statusCode = 404) {
    this.statusCode = statusCode;
  }
}
