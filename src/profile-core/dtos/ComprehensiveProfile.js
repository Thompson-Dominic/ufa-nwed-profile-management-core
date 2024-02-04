/* eslint-disable linebreak-style */
class ComprehensiveProfile {
  #profileId;

  #firstName;

  #lastName;

  #email;

  #otherNames;

  #profilePicture;

  #biography;

  #contactInformation;

  #preferences;

  #activityLog;

  #workExperiences;

  #educations;

  #profileSettings;

  /**
   * @param {string} firstName - The first name of the profile.
   * @param {string} lastName - The last name of the profile.
   * @param {string} email - The email address of the profile.
   * @param {string} otherNames - Any other names the profile might go by.
   * @param {string} profilePicture - URL of the profile picture.
   * @param {string} biography - A short biography of the profile.
   * @param {Object} contactInformation - An object containing contact information fields.
   * @param {Object} preferences - An object containing preference fields.
   * @param {Object[]} activityLog - An array of activity log entries.
   * @param {Object} workExperiences - An array of work experience entries.
   * @param {Object} educations - An array of education entries.
   * @param {Object} profileSettings - An object containing profile setting fields.
   */
  constructor(
    profileId,
    firstName,
    lastName,
    email,
    otherNames,
    profilePicture,
    biography,
    contactInformation,
    preferences,
    activityLog,
    workExperiences,
    educations,
    profileSettings,
  ) {
    this.#profileId = profileId;
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#email = email;
    this.#otherNames = otherNames;
    this.#profilePicture = profilePicture;
    this.#biography = biography;
    this.#contactInformation = contactInformation;
    this.#preferences = preferences;
    this.#activityLog = activityLog;
    this.#workExperiences = workExperiences;
    this.#educations = educations;
    this.#profileSettings = profileSettings;
  }

  /** @returns {string} The ID of the profile. */
  get profileId() {
    return this.#profileId;
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

  /** @returns {string} Any other names the profile might go by. */
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

  /** @returns {Object[]} An array of activity log entries. */
  get activityLog() {
    return this.#activityLog;
  }

  /** @returns {Object} An array of work experience entries. */
  get workExperiences() {
    return this.#workExperiences;
  }

  /** @returns {Object} An array of education entries. */
  get educations() {
    return this.#educations;
  }

  /** @returns {Object} An object containing profile setting fields. */
  get profileSettings() {
    return this.#profileSettings;
  }
}

export default ComprehensiveProfile;
