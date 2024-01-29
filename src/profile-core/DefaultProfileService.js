/* eslint-disable linebreak-style */

import ProfileDTOFactory from './ProfileDTOFactory';

class DefaultProfileService {
  /**
   * @param {ProfileRepository} profileRepository - The repository to use for profile data.
   */
  constructor(profileRepository) {
    this.profileRepository = profileRepository;
  }

  /**
   * Get a profile by its ID.
   * @param {string} id - The ID of the profile.
   * @returns {Promise<Profile>} The profile with the given ID.
   */
  async getBasicProfile(id) {
    return ProfileDTOFactory.createBasicInfoProfile(this.profileRepository.getProfileById(id));
  }

  /**
   * Save a profile.
   * @param {Profile} profile - The profile to save.
   * @returns {Promise<void>}
   */
  async saveProfile(profile) {
    return this.profileRepository.saveProfile(profile);
  }

  /**
   * Delete a profile by its ID.
   * @param {string} id - The ID of the profile to delete.
   * @returns {Promise<void>}
   */
  async deleteProfile(id) {
    return this.profileRepository.deleteProfile(id);
  }

  /**
   * Get all profiles.
   * @returns {Promise<Profile[]>} All profiles.
   */
  async getAllProfiles() {
    const profiles = this.profileRepository.getAllProfiles();
    return profiles.map((profile) => ProfileDTOFactory.createBasicInfoProfile(profile));
  }
}

export default DefaultProfileService;
