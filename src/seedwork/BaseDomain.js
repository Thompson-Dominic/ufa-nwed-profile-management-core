/* eslint-disable import/no-extraneous-dependencies */
/**
 * BaseDomain class that serves as a base for other domain classes.
 * It includes an id property and methods for working with it.
 */

import { v4 as uuidv4, NIL as NIL_UUID } from 'uuid';

import ProfileManagementException from '../ProfileManagementException';

export default class BaseDomain {
  #id = NIL_UUID;

  /**
   * Constructs a new BaseDomain instance.
   * @param {number|string} id - The id of the domain.
   */
  constructor(id) {
    this.#id = id;
  }

  /**
   * Gets the id of the domain.
   * @return {number|string} The id of the domain.
   */
  get id() {
    return this.#id;
  }

  /**
   * Sets the id of the domain.
   * @param {number|string} id - The new id of the domain.
   */
  set id(id) {
    if (id === null || id === undefined || id === NIL_UUID) throw new ProfileManagementException('Id cannot be null or undefined.');

    if (typeof id !== 'number' && typeof id !== 'string') throw new Error('Id must be a number or a string.');

    this.#id = id;
  }

  /**
   * Checks if the domain is transient (i.e., has no id).
   * @return {boolean} True if the domain is transient, false otherwise.
   */
  isTransient() {
    return this.id === null || this.id === undefined || this.id === NIL_UUID;
  }

  /**
   * Generates a new id for the domain.
   */
  generateId() {
    if (!this.isTransient()) throw new ProfileManagementException('Cannot generate id for a non-transient domain.');
    this.#id = uuidv4();
  }

  /**
   * Checks if this domain is equal to another domain.
   * @param {BaseDomain} other - The other domain to compare with.
   * @return {boolean} True if the domains are equal, false otherwise.
   */
  equals(other) {
    return this.#id === other.id;
  }
}
