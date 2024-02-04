/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import { v4, NIL as NILL_UUID } from 'uuid';
import { ProfileSetting } from '../src/profile-core'; // adjust the path to your ProfileSetting class

describe('ProfileSetting class', () => {
  let profileSetting;

  beforeEach(() => {
    profileSetting = new ProfileSetting(v4());
  });

  /**
   * Test that the profileId setter and getter work correctly.
   */
  it('should set and get profileId', () => {
    expect(profileSetting.profileId).not.toBe(NILL_UUID);
  });

  /**
   * Test that the profileId setter throws an error when called with an empty string.
   */
  it('should throw an error when setting empty profileId', () => {
    expect(() => {
      profileSetting.profileId = '';
    }).toThrow('Invalid argument: Profile ID cannot be null or empty.');
  });

  /**
   * Test that the profileId setter throws an error when called with undefined.
   */
  it('should throw an error when setting undefined profileId', () => {
    expect(() => {
      profileSetting.profileId = undefined;
    }).toThrow('Invalid argument: Profile ID cannot be null or empty.');
  });
  /**
   * Test that the privacySettings setter and getter work correctly.
   */
  it('should set and get privacySettings', () => {
    const privacySettings = { hideEmail: true };
    profileSetting.privacySettings = privacySettings;
    expect(profileSetting.privacySettings).toEqual(privacySettings);
  });

  /**
   * Test that the notificationPreferences setter and getter work correctly.
   */
  it('should set and get notificationPreferences', () => {
    const notificationPreferences = { email: true, sms: false };
    profileSetting.notificationPreferences = notificationPreferences;
    expect(profileSetting.notificationPreferences).toEqual(
      notificationPreferences,
    );
  });

  /**
   * Test that the securitySettings setter and getter work correctly.
   */
  it('should set and get securitySettings', () => {
    const securitySettings = { twoFactorAuth: true };
    profileSetting.securitySettings = securitySettings;
    expect(profileSetting.securitySettings).toEqual(securitySettings);
  });
});
