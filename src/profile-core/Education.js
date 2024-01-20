/**
 * Represents an Education object.
 */
import { BaseDomain } from '../seedwork';

class Education extends BaseDomain {
  #profileId;

  #institution;

  #awardTitle;

  #awardType;

  #year;

  #validationLink;

  #credentialUpload;

  /**
   * Constructs a new Education object.
   * @param {string} profileId - The profile ID.
   * @param {string} institution - The name of the educational institution.
   * @param {string} awardTitle - The title of the award obtained.
   * @param {string} awardType - The type of the award obtained.
   * @param {number} year - The year of completion.
   * @param {string} validationlink - The link to the validation of the award.
   * @param {string} credentilaUpload - The link to the upload of the credential.
   */
  constructor(
    profileId,
    institution,
    awardTitle,
    awardType,
    year,
    educationId = 0,
    validationLink = null,
    credentialUpload = null,
  ) {
    super(educationId);
    this.#profileId = profileId;
    this.#institution = institution;
    this.#awardTitle = awardTitle;
    this.#awardType = awardType;
    this.#year = year;
    this.#validationLink = validationLink;
    this.#credentialUpload = credentialUpload;
  }

  /**
   * Gets the profile ID.
   * @return {string} The profile ID.
   */
  get profileId() {
    return this.#profileId;
  }

  /**
   * Sets the profile ID.
   */
  set profileId(profileId) {
    this.#profileId = profileId;
  }

  /**
   * Gets the institution.
   * @return {string} The institution.
   */
  get institution() {
    return this.#institution;
  }

  /**
   * Sets the institution.
   * @param {string} institution - The institution.
   */
  set institution(institution) {
    this.#institution = institution;
  }

  /**
   * Gets the award title.
   * @return {string} The award title.
   */
  get awardTitle() {
    return this.#awardTitle;
  }

  /**
   * Sets the award title.
   * @param {string} awardTitle - The award title.
   */
  set awardTitle(awardTitle) {
    this.#awardTitle = awardTitle;
  }

  /**
   * Gets the award type.
   * @return {string} The award type.
   */
  get awardType() {
    return this.#awardType;
  }

  /**
   * Sets the award type.
   * @param {string} awardType - The award type.
   */
  set awardType(awardType) {
    this.#awardType = awardType;
  }

  /**
   * Gets the year.
   * @return {number} The year.
   */
  get year() {
    return this.#year;
  }

  /**
   * Sets the year.
   * @param {number} year - The year.
   */
  set year(year) {
    this.#year = year;
  }

  /**
   * Gets the validation link.
   * @return {string} The validation link.
   */
  get validationLink() {
    return this.#validationLink;
  }

  /**
   * Sets the validation link.
   * @param {string} validationLink - The link to the validation of the award.
   */
  set validationLink(validationLink) {
    this.#validationLink = validationLink;
  }

  /**
   * Gets the credential upload link.
   * @return {string} The credential upload link.
   */
  get credentialUpload() {
    return this.#credentialUpload;
  }

  /**
   * Sets the credential upload link.
   * @param {string} credentialUpload - The link to the upload of the credential.
   */
  set credentialUpload(credentialUpload) {
    this.#credentialUpload = credentialUpload;
  }
}

export default Education;
