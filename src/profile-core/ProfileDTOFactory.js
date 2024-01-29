/* eslint-disable linebreak-style */
/**
 * ProfileFactory
 */

import { BasicInfoProfile, ComprehensiveProfile } from './dtos';

class ProfileDTOFactory {
  /**
   * Generates a BasicInfoProfile instance.
   * @param {Object} profile - The profile data.
   * @returns {BasicInfoProfile} A BasicInfoProfile instance.
   */
  static createBasicInfoProfile(profile) {
    return new BasicInfoProfile(...profile);
  }

  /**
   * Generates a ComprehensiveProfile instance.
   * @param {Object} profile - The profile data.
   * @returns {ComprehensiveProfile} A ComprehensiveProfile instance.
   */
  static createComprehensiveProfile(profile) {
    return new ComprehensiveProfile(...profile);
  }
}

export default ProfileDTOFactory;
