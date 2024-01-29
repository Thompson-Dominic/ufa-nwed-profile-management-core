/* eslint-disable linebreak-style */
import { BaseDomain } from '../seedwork';

/**
 * WorkExperience class that represents a user's work experience.
 */
class WorkExperience extends BaseDomain {
  #profileId;

  #workExperienceId;

  #companyName;

  #position;

  #startDate;

  #endDate;

  #roleDescription;

  /**
   * Constructs a new WorkExperience instance.
   * @param {string} profileId - The profile ID.
   * @param {string} companyName - The name of the company.
   * @param {string} position - The position held at the company.
   * @param {Date} startDate - The start date of the work experience.
   * @param {Date} endDate - The end date of the work experience.
   * @param {string} workExperienceId - The unique identifier for the work experience (optional).
   * @param {string} roleDescription - The description of the role (optional).
   */
  constructor(
    profileId,
    companyName,
    position,
    startDate,
    endDate,
    workExperienceId = null,
    roleDescription = null,
  ) {
    super(workExperienceId);
    this.#profileId = profileId;
    this.#workExperienceId = workExperienceId;
    this.#companyName = companyName;
    this.#position = position;
    this.#startDate = startDate;
    this.#endDate = endDate;
    this.#roleDescription = roleDescription;
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
   * Gets the work experience ID.
   * @return {string} The work experience ID.
   */
  get id() {
    return this.#workExperienceId;
  }

  /**
   * Sets the work experience ID.
   * @param {string} id - The work experience ID.
   */
  set id(id) {
    this.#workExperienceId = id;
  }

  /**
   * Gets the company name.
   * @return {string} The company name.
   */
  get companyName() {
    return this.#companyName;
  }

  /**
   * Sets the company name.
   * @param {string} companyName - The company name.
   */
  set companyName(companyName) {
    this.#companyName = companyName;
  }

  /**
   * Gets the position.
   * @return {string} The position.
   */
  get position() {
    return this.#position;
  }

  /**
   * Sets the position.
   * @param {string} position - The position.
   */
  set position(position) {
    this.#position = position;
  }

  /**
   * Gets the start date.
   * @return {Date} The start date.
   */
  get startDate() {
    return this.#startDate;
  }

  /**
   * Sets the start date.
   * @param {Date} startDate - The start date.
   */
  set startDate(startDate) {
    this.#startDate = startDate;
  }

  /**
   * Gets the end date.
   * @return {Date} The end date.
   */
  get endDate() {
    return this.#endDate;
  }

  /**
   * Sets the end date.
   * @param {Date} endDate - The end date.
   */
  set endDate(endDate) {
    this.#endDate = endDate;
  }

  /**
   * Gets the role description.
   * @return {string} The role description.
   */
  get roleDescription() {
    return this.#roleDescription;
  }

  /**
   * Sets the role description.
   * @param {string} roleDescription - The role description.
   */
  set roleDescription(roleDescription) {
    this.#roleDescription = roleDescription;
  }
}

export default WorkExperience;
