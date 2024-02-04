/* eslint-disable linebreak-style */
/* Profile Settings for the Profile Management System. */
import ProfileManagementException from '../ProfileManagementException';
import { BaseDomain } from '../seedwork';

class ProfileSetting extends BaseDomain {
  #profileId;

  #privacySettings;

  #notificationPreferences;

  #securitySettings;

  /**
   * Constructs a new ProfileSetting instance.
   * @param {string} profileId - The profile ID.
   * @param {string} name - The name.
   * @param {string} value - The value.
   */
  constructor(profileId, profileSettingId = 0) {
    super(profileSettingId);
    this.#profileId = profileId;
    this.#privacySettings = {};
    this.#notificationPreferences = {};
    this.#securitySettings = {};
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
   * @param {string} profileId - The profile ID.
   */
  set profileId(profileId) {
    if (profileId === null || profileId === undefined || profileId === '') {
      throw new ProfileManagementException('Invalid argument: Profile ID cannot be null or empty.');
    }
    this.#profileId = profileId;
  }

  /**
   * Gets the privacy settings.
   * @return {Object} The privacy settings.
   */
  get privacySettings() {
    return this.#privacySettings;
  }

  /**
   * Sets the privacy settings.
   * @param {Object} privacySettings - The privacy settings.
   */
  set privacySettings(privacySettings) {
    this.#privacySettings = privacySettings;
  }

  /**
   * Gets the notification preferences.
   * @return {Object} The notification preferences.
   */
  get notificationPreferences() {
    return this.#notificationPreferences;
  }

  /**
   * Sets the notification preferences.
   * @param {Object} notificationPreferences - The notification preferences.
   */
  set notificationPreferences(notificationPreferences) {
    this.#notificationPreferences = notificationPreferences;
  }

  /**
   * Gets the security settings.
   * @return {Object} The security settings.
   */
  get securitySettings() {
    return this.#securitySettings;
  }

  /**
   * Sets the security settings.
   * @param {Object} securitySettings - The security settings.
   */
  set securitySettings(securitySettings) {
    this.#securitySettings = securitySettings;
  }
}

export default ProfileSetting;
