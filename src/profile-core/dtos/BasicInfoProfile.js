/* eslint-disable linebreak-style */
class BasicInfoProfile {
  #firstName;

  #lastName;

  #email;

  #otherNames;

  #profilePicture;

  #biography;

  #contactInformation;

  #preferences;

  #profileSettings;

  /**
   * @param {string} firstName - The first name of the profile.
   * @param {string} lastName - The last name of the profile.
   * @param {string} email - The email address of the profile.
   * @param {string[]} otherNames - Any other names the profile might go by.
   * @param {string} profilePicture - URL of the profile picture.
   * @param {string} biography - A short biography of the profile.
   * @param {Object} contactInformation - An object containing contact information fields.
   * @param {Object} preferences - An object containing preference fields.
   * @param {Object} profileSettings - An object containing profile setting fields.
   */
  constructor(
    firstName,
    lastName,
    email,
    otherNames,
    profilePicture,
    biography,
    contactInformation,
    preferences,
    profileSettings,
  ) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#email = email;
    this.#otherNames = otherNames;
    this.#profilePicture = profilePicture;
    this.#biography = biography;
    this.#contactInformation = contactInformation;
    this.#preferences = preferences;
    this.#profileSettings = profileSettings;
  }

  /** @returns {string} The first name of the profile. */
  get firstName() {
    return this.#firstName;
  }

  /** @returns {string} The last name of the profile. */
  get lastName() {
    return this.#lastName;
  }

  /** @returns {string} The email address of the profile. */
  get email() {
    return this.#email;
  }

  /** @returns {string[]} Any other names the profile might go by. */
  get otherNames() {
    return this.#otherNames;
  }

  /** @returns {string} URL of the profile picture. */
  get profilePicture() {
    return this.#profilePicture;
  }

  /** @returns {string} A short biography of the profile. */
  get biography() {
    return this.#biography;
  }

  /** @returns {Object} An object containing contact information fields. */
  get contactInformation() {
    return this.#contactInformation;
  }

  /** @returns {Object} An object containing preference fields. */
  get preferences() {
    return this.#preferences;
  }

  /** @returns {Object} An object containing profile setting fields. */
  get profileSettings() {
    return this.#profileSettings;
  }
}

export default BasicInfoProfile;
