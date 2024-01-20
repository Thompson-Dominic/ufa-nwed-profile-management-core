// eslint-disable-next-line import/no-extraneous-dependencies

import ProfileManagementException from '../ProfileManagementException';
import { BaseDomain } from '../seedwork';
import WorkExperience from './WorkExperience';
import Education from './Education';
import ProfileSetting from './ProfileSetting';

/**
 * Profile class that represents a user profile.
 */
class Profile extends BaseDomain {
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
   * Constructs a new Profile instance.
   * @param {string} firstName - The first name of the user.
   * @param {string} lastName - The last name of the user.
   * @param {string} email - The email address of the user.
   * @param {string} otherNames - The otherNames of the user.
   */
  constructor(firstName, lastName, email, otherNames, profileId = null) {
    super(profileId);
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#email = email;
    this.#otherNames = otherNames;
    this.#profilePicture = null;
    this.#biography = null;
    this.#contactInformation = {};
    this.#preferences = {};
    this.#activityLog = [];
    this.#workExperiences = new Map();
    this.#educations = new Map();
    this.#profileSettings = new Map();

    if (this.isTransient()) {
      super.generateId();
    }
  }

  /**
   * Gets the profile id.
   */

  generateProfileId() {
    super.generateId();
  }

  // Getter for firstName
  get firstName() {
    return this.#firstName;
  }

  // Setter for firstName
  set firstName(newFirstName) {
    this.#firstName = newFirstName;
  }

  // Getter for lastName
  get lastName() {
    return this.#lastName;
  }

  // Setter for lastName
  set lastName(newLastName) {
    this.#lastName = newLastName;
  }

  /**
   * Gets the full name.
   * @return {string} The full name.
   */
  get name() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  /**
   * Sets the first name and last name.
   * @param {string} name - The full name.
   */
  set name(name) {
    [this.#firstName, this.#lastName] = name.split(' ');
  }

  /**
   * Gets the email.
   * @return {string} The email.
   */
  get email() {
    return this.#email;
  }

  /**
   * Sets the email.
   * @param {string} email - The email.
   */
  set email(_email) {
    this.#email = _email;
  }

  /**
   * Gets the otherNames.
   * @return {string} The otherNames.
   */
  get otherNames() {
    return this.#otherNames;
  }

  /**
   * Sets the otherNames.
   * @param {string} otherNames - The otherNames.
   */
  set otherNames(otherNames) {
    this.#otherNames = otherNames;
  }

  /**
   * Gets the profile picture.
   * @return {string} The profile picture.
   */
  get profilePicture() {
    return this.#profilePicture;
  }

  /**
   * Sets the profile picture.
   * @param {string} profilePicture - The profile picture.
   */
  set profilePicture(profilePicture) {
    this.#profilePicture = profilePicture;
  }

  /**
   * Gets the biography.
   * @return {string} The biography.
   */
  get biography() {
    return this.#biography;
  }

  /**
   * Sets the biography.
   * @param {string} biography - The biography.
   */
  set biography(biography) {
    this.#biography = biography;
  }

  /**
   * Gets the contact information.
   * @return {Object} The contact information.
   */
  get contactInformation() {
    return this.#contactInformation;
  }

  /**
   * Sets the contact information.
   * @param {Object} contactInformation - The contact information.
   */
  set contactInformation(contactInformation) {
    this.#contactInformation = contactInformation;
  }

  /**
   * Gets the preferences.
   * @return {Object} The preferences.
   */
  get preferences() {
    return this.#preferences;
  }

  /**
   * Sets the preferences.
   * @param {Object} preferences - The preferences.
   */
  set preferences(preferences) {
    this.#preferences = preferences;
  }

  /**
   * Gets the activity log.
   * @return {Array} The activity log.
   */
  get activityLog() {
    return this.#activityLog;
  }

  /**
   * Sets the activity log.
   * @param {Array} activityLog - The activity log.
   */
  set activityLog(activityLog) {
    this.#activityLog = activityLog;
  }

  /**
   * Gets the work experiences.
   * @return {Map} The work experiences.
   */
  get workExperiences() {
    return this.#workExperiences;
  }

  /**
   * Gets the educations.
   * @return {Map} The educations.
   */
  get educations() {
    return this.#educations;
  }

  /**
   * Gets the profile settings.
   * @return {Map} The profile settings.
   */
  get profileSettings() {
    return this.#profileSettings;
  }

  /**
   * Adds a work experience.
   * @param {WorkExperience} workExperience - The work experience.
   * @throws {ProfileManagementException} If the work experience is not an instance of
   * Work Experience or does not belong to this profile.
   */
  addWorkExperience(workExperience) {
    if (
      typeof workExperience === 'undefined'
      || workExperience === null
      || !(workExperience instanceof WorkExperience)
    ) {
      throw new ProfileManagementException(
        'Invalid argument: Work experience must be an instance of WorkExperience.',
      );
    }
    if (workExperience.profileId !== this.id) {
      throw new ProfileManagementException(
        'Invalid Argument: Work experience must belong to this profile.',
      );
    }
    this.#workExperiences.set(workExperience.id, workExperience);
  }

  /**
   * Adds an education to the profile.
   * @param {Education} education - The education to add.
   * @throws {ProfileManagementException} If the education is not an instance of Education or
   * does not belong to this profile.
   */
  addEducation(education) {
    if (
      typeof education === 'undefined'
      || education === null
      || !(education instanceof Education)
    ) {
      throw new ProfileManagementException(
        'Invalid argument: Education must be an instance of Education.',
      );
    }
    if (education.profileId !== this.id) {
      throw new ProfileManagementException(
        'Invalid Argument: Education must belong to this profile.',
      );
    }
    this.#educations.set(education.id, education);
  }

  /**
   * Adds a profile setting to the profile.
   * @param {ProfileSetting} profileSetting - The profile setting to add.
   * @throws {ProfileManagementException} If the profile setting is not an instance of
   * ProfileSetting or does not belong to this profile.
   */
  addProfileSetting(profileSetting) {
    if (
      typeof profileSetting === 'undefined'
      || profileSetting === null
      || !(profileSetting instanceof ProfileSetting)
    ) {
      throw new ProfileManagementException(
        'Invalid argument: Profile setting must be an instance of ProfileSetting.',
      );
    }
    if (profileSetting.profileId !== this.id) {
      throw new ProfileManagementException(
        'Invalid Argument: Profile setting must belong to this profile.',
      );
    }
    this.#profileSettings.set(profileSetting.id, profileSetting);
  }
}

export default Profile;
