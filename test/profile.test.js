/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
// Tests for the Profile class

// eslint-disable-next-line import/no-extraneous-dependencies
import { NIL as NIL_UUID } from 'uuid';
import ProfileManagementException from '../src/ProfileManagementException';

import {
  Profile,
  WorkExperience,
  ProfileSetting,
  Education,
} from '../src/profile-core';

/**
 * Test suite for the Profile class.
 */
describe('Profile', () => {
  let profile;

  /**
   * Set up a new Profile instance before each test.
   */
  beforeEach(() => {
    profile = new Profile('John', 'Doe', 'john.doe@example.com', 'JD');
  });

  /**
   * Test that the Profile constructor correctly sets initial properties.
   */
  test('should correctly set initial properties', () => {
    expect(profile.firstName).toBe('John');
    expect(profile.lastName).toBe('Doe');
    expect(profile.email).toBe('john.doe@example.com');
    expect(profile.otherNames).toBe('JD');
    expect(profile.id).not.toBe(NIL_UUID);
  });

  /**
   * Test that the addWorkExperience method correctly adds a work experience to the profile.
   */
  test('should be able to add work experience', () => {
    const workExperience = new WorkExperience();
    workExperience.profileId = profile.id;
    profile.addWorkExperience(workExperience);
    expect(profile.workExperiences.get(workExperience.id)).toBe(workExperience);
  });

  /**
   * Test that the addEducation method correctly adds an education to the profile.
   */
  test('should be able to add education', () => {
    const education = new Education();
    education.profileId = profile.id;
    profile.addEducation(education);
    expect(profile.educations.get(education.id)).toBe(education);
  });

  /**
   * Test that the addProfileSetting method correctly adds a profile setting to the profile.
   */
  test('should be able to add profile setting', () => {
    const profileSetting = new ProfileSetting();
    profileSetting.profileId = profile.id;
    profile.addProfileSetting(profileSetting);
    expect(profile.profileSettings.get(profileSetting.id)).toBe(profileSetting);
  });

  // Add more tests as needed for other methods and edge cases
  it('should throw an error if an education does not belong to the profile', () => {
    const education = new Education(
      'AnotherProfileId',
      'Harvard',
      'Computer Science',
      'Bachelor',
      2022,
    );

    expect(() => {
      profile.addEducation(education);
    }).toThrow(ProfileManagementException);
  });

  it('should not throw an error if an education belongs to the profile', () => {
    const education = new Education(
      profile.id,
      'Harvard',
      'Computer Science',
      'Bachelor',
      2022,
    );

    expect(() => {
      profile.addEducation(education);
    }).not.toThrow();
  });
});
