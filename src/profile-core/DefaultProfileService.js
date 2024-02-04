/* eslint-disable linebreak-style */

import ProfileManagementException from '../ProfileManagementException';
import ProfileDTOFactory from './ProfileDTOFactory';
import ProfileRepository from './ProfileRepository';
import Profile from './Profile';

class DefaultProfileService {
  #profileRepository;

  /**
   * @param {ProfileRepository} profileRepository - The repository to use for profile data.
   * simulate the constructor injection
   */
  constructor(profileRepository) {
    if (!profileRepository) throw new ProfileManagementException('ProfileRepository is required');
    if (!(profileRepository instanceof ProfileRepository)) {
      throw new ProfileManagementException('Repository must be an instance of ProfileRepository');
    }
    this.#profileRepository = profileRepository;
  }

  /**
   * Get a profile by its ID.
   * @param {string} id - The ID of the profile.
   * @returns {Promise<Profile>} The profile with the given ID.
   */
  async getBasicProfile(id) {
    if (!id) throw new ProfileManagementException('Profile id is required');
    return ProfileDTOFactory.createBasicInfoProfile(this.#profileRepository.getProfileById(id));
  }

  /**
   * Save a profile.
   * @param {Profile} profile - The profile to save.
   * @returns {Promise<Object>}
   */
  async saveProfile(profile) {
    if (!profile) throw new ProfileManagementException('Profile is required');
    if (!(profile instanceof Profile)) throw new ProfileManagementException('Profile must be an instance of Profile');
    return this.#profileRepository.saveProfile(profile);
  }

  /**
   * Delete a profile by its ID.
   * @param {string} id - The ID of the profile to delete.
   * @returns {Promise<Boolean>}
   */
  async deleteProfile(id) {
    if (!id) throw new ProfileManagementException('Profile id is required');
    return this.#profileRepository.deleteProfile(id);
  }

  /**
   * Get all profiles.
   * @returns {Promise<Profile[]>} All profiles.
   */
  async getAllProfiles() {
    const profiles = this.#profileRepository.getAllProfiles();
    return profiles.map((profile) => ProfileDTOFactory.createBasicInfoProfile(profile));
  }
}

export default DefaultProfileService;
