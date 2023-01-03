export class DatabaseConnectionError extends Error {
  reason = 'Error connectin to database';
  
  constructor() {
    super();

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
