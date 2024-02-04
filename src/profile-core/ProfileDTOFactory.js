/* eslint-disable linebreak-style */
/**
 * ProfileFactory
 */

import ProfileManagementException from '../ProfileManagementException';
import Profile from './Profile';
import { BasicInfoProfile, ComprehensiveProfile } from './dtos';

class ProfileDTOFactory {
  /**
   * Generates a BasicInfoProfile instance.
   * @param {Object} profile - The profile data.
   * @returns {BasicInfoProfile} A BasicInfoProfile instance.
   */
  static createBasicInfoProfile(profile) {
    if (!(profile instanceof Profile)) {
      throw new ProfileManagementException(
        'profile must be an instance of Profile',
      );
    }
    return new BasicInfoProfile(
      profile.id,
      profile.firstName,
      profile.lastName,
      profile.email,
      profile.otherNames,
      profile.profilePicture,
      profile.biography,
      profile.contactInformation,
      profile.preferences,
      profile.profileSettings,
    );
  }

  /**
   * Generates a ComprehensiveProfile instance.
   * @param {Object} profile - The profile data.
   * @returns {ComprehensiveProfile} A ComprehensiveProfile instance.
   */
  static createComprehensiveProfile(profile) {
    if (!(profile instanceof Profile)) {
      throw new ProfileManagementException(
        'profile must be an instance of Profile',
      );
    }
    return new ComprehensiveProfile(
      profile.id,
      profile.firstName,
      profile.lastName,
      profile.email,
      profile.otherNames,
      profile.profilePicture,
      profile.biography,
      profile.contactInformation,
      profile.preferences,
      profile.activityLog,
      profile.workExperiences,
      profile.educations,
      profile.profileSettings,
    );
  }
}

export default ProfileDTOFactory;
