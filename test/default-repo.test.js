/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import { jest } from '@jest/globals';
import {
  Profile,
  ProfileRepository,
  DefaultProfileService,
} from '../src/profile-core';
import ProfileManagementException from '../src/ProfileManagementException';

// jest.unstable_mockModule('../src/profile-core/ProfileRepository', () => ({
//   getProfileById: jest.fn(),
//   saveProfile: jest.fn(),
//   deleteProfile: jest.fn(),
//   getAllProfiles: jest.fn(),
// }));

jest.mock('../src/profile-core/ProfileRepository', () => jest.fn().mockImplementation(() => ({
  getProfileById: jest.fn(),
  saveProfile: jest.fn(),
  deleteProfile: jest.fn(),
  getAllProfiles: jest.fn(),
})));

// const { ProfileRepository } = await import('../src/profile-core/ProfileRepository');

describe('DefaultProfileService', () => {
  //   let profileRepository;
  //   let defaultProfileService;
  const mockProfileRepository = new ProfileRepository();

  beforeEach(() => {
    // ProfileRepository.clearAllMocks();
    // defaultProfileService = new DefaultProfileService(ProfileRepository);
  });

  /**
   * Test that the constructor throws an error when no profileRepository is provided.
   */
  it('constructor should throw an error when no profileRepository is provided', () => {
    expect(() => new DefaultProfileService()).toThrow(
      ProfileManagementException,
    );
  });

  /**
   * Test that the constructor throws an error when an improper instance is provided.
   */
  it('constructor should throw an error when an improper instance is provided', () => {
    expect(() => new DefaultProfileService({})).toThrow(
      ProfileManagementException,
    );
  });

  /**
   * Test that getBasicProfile throws an error when no id is provided.
   */
  it('getBasicProfile should throw an error when no id is provided', async () => {
    await expect(
      new DefaultProfileService(mockProfileRepository).getBasicProfile(),
    ).rejects.toThrow(ProfileManagementException);
  });

  /**
   * Test that saveProfile throws an error when no profile is provided.
   */
  it('saveProfile should throw an error when no profile is provided', async () => {
    await expect(
      new DefaultProfileService(mockProfileRepository).saveProfile(),
    ).rejects.toThrow(ProfileManagementException);
  });

  /**
   * Test that deleteProfile throws an error when no id is provided.
   */
  it('deleteProfile should throw an error when no id is provided', async () => {
    await expect(
      new DefaultProfileService(mockProfileRepository).deleteProfile(),
    ).rejects.toThrow(ProfileManagementException);
  });

  /**
   * Test that getAllProfiles throws an error for lack of implementation.
   */
  it('getAllProfiles should throw an error', async () => {
    const defaultProfileService = new DefaultProfileService(mockProfileRepository);
    await expect(defaultProfileService
      .getAllProfiles())
      .rejects.toThrow(ProfileManagementException);
    // expect(Array.isArray(profiles)).toBe(true);
  });

  /**
   * Test that getAllProfiles returns an array of profiles.
   */
//   it('getAllProfiles should return an array of profiles', async () => {
//     const defaultProfileService = new DefaultProfileService(mockProfileRepository);
//     const profiles = await defaultProfileService
//       .getAllProfiles()
//       .then((data) => data);
//     expect(Array.isArray(profiles)).toBe(true);
//   });
});
