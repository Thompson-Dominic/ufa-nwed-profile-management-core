/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import { ProfileRepository } from '../src/profile-core';
import ProfileManagementException from '../src/ProfileManagementException';

describe('ProfileRepository', () => {
  /**
   * Test that getProfileById throws a ProfileManagementException.
   */
  it('getProfileById should throw a ProfileManagementException', () => {
    expect(() => new ProfileRepository().getProfileById('1')).toThrow(
      ProfileManagementException,
    );
  });

  /**
   * Test that saveProfile throws a ProfileManagementException.
   */
  it('saveProfile should throw a ProfileManagementException', () => {
    expect(() => new ProfileRepository().saveProfile({})).toThrow(
      ProfileManagementException,
    );
  });

  /**
   * Test that deleteProfile throws a ProfileManagementException.
   */
  it('deleteProfile should throw a ProfileManagementException', () => {
    expect(() => new ProfileRepository().deleteProfile('1')).toThrow(ProfileManagementException);
  });

  /**
   * Test that getAllProfiles throws a ProfileManagementException.
   */
  it('getAllProfiles should throw a ProfileManagementException', () => {
    expect(() => new ProfileRepository().getAllProfiles()).toThrow(ProfileManagementException);
  });
});
