/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */

class ProfileRepository {
  /**
   * Get a profile by its ID.
   * @param {string} id - The ID of the profile.
   * @returns {Promise<Profile>} The profile with the given ID.
   */
  getProfileById(id) {
    throw new Error('Not implemented');
  }

  /**
   * Save a profile.
   * @param {Profile} profile - The profile to save.
   * @returns {Promise<void>}
   */
  saveProfile(profile) {
    throw new Error('Not implemented');
  }

  /**
   * Delete a profile by its ID.
   * @param {string} id - The ID of the profile to delete.
   * @returns {Promise<void>}
   */
  deleteProfile(id) {
    throw new Error('Not implemented');
  }

  /**
   * Get all profiles.
   * @returns {Promise<Profile[]>} All profiles.
   */
  getAllProfiles() {
    throw new Error('Not implemented');
  }
}

export default ProfileRepository;
