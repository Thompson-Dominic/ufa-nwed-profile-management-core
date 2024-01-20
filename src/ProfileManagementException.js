/**
 * Custom Error class for Profile Management.
 */
export default class ProfileManagementException extends Error {
  /**
   * Constructs a new ProfileManagementException instance.
   * @param {string} message - The error message.
   */
  constructor(message) {
    super(message); // Pass the message to the Error constructor
    this.name = 'ProfileManagementException'; // Set the name of the error
  }
}
