/* eslint-disable linebreak-style */
import { BaseDomain } from '../seedwork';
import ProfileManagementException from '../ProfileManagementException';
/**
 * WorkExperience class that represents a user's work experience.
 */
class WorkExperience extends BaseDomain {
  #profileId;

  #workExperienceId;

  #companyName;

  #jobRole;

  #startDate;

  #endDate;

  #roleDescription;

  /**
   * Constructs a new WorkExperience instance.
   * @param {string} profileId - The profile ID.
   * @param {string} companyName - The name of the company.
   * @param {string} jobRole - The jobRole held at the company.
   * @param {Date} startDate - The start date of the work experience.
   * @param {Date} endDate - The end date of the work experience.
   * @param {string} workExperienceId - The unique identifier for the work experience (optional).
   * @param {string} roleDescription - The description of the role (optional).
   */
  constructor(
    profileId,
    companyName,
    jobRole,
    startDate,
    endDate,
    workExperienceId = null,
    roleDescription = null,
  ) {
    super(workExperienceId);
    this.#profileId = profileId;
    this.#workExperienceId = workExperienceId;
    this.#companyName = companyName;
    this.#jobRole = jobRole;
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
    if (profileId === null || profileId === undefined || profileId === '') {
      throw new ProfileManagementException('Invalid argument: Profile ID cannot be null or empty.');
    }
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
   * Gets the jobRole.
   * @return {string} The jobRole.
   */
  get jobRole() {
    return this.#jobRole;
  }

  /**
   * Sets the jobRole.
   * @param {string} jobRole - The jobRole.
   */
  set jobRole(jobRole) {
    if (jobRole === null || jobRole === undefined) {
      throw new ProfileManagementException('Invalid argument: Job role cannot be null or undefined.');
    }
    this.#jobRole = jobRole;
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
    if (startDate === null || startDate === undefined) {
      throw new ProfileManagementException(
        'Invalid argument: Start date cannot be null or undefined.',
      );
    }
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
    if (endDate === null || endDate === undefined) {
      throw new ProfileManagementException('Invalid argument: End date cannot be null or undefined.');
    }
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
    if (roleDescription === null || roleDescription === undefined) {
      throw new ProfileManagementException('Invalid argument: Role description cannot be null or undefined.');
    }
    this.#roleDescription = roleDescription;
  }
}

export default WorkExperience;
