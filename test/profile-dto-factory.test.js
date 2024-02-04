/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import {
  Profile,
  ProfileSetting,
  Education,
  WorkExperience,
  ProfileDTOFactory,
  ProfileTransferObjects,
} from '../src/profile-core';
import ProfileManagementException from '../src/ProfileManagementException';

describe('ProfileDTOFactory', () => {
  let profile;
  const contactInformation = { phone: '1234567890' };
  const preferences = { color: 'blue' };
  const profileSetting = new ProfileSetting();
  /**
   * Set up a new Profile instance before each test.
   */
  beforeEach(() => {
    profile = new Profile('John', 'Doe', 'john.doe@example.com', 'JD');
    profile.firstName = 'John';
    profile.lastName = 'Doe';
    profile.email = 'john.doe@example.com';
    profile.otherNames = 'Johnny';
    profile.profilePicture = 'http://example.com/profile.jpg';
    profile.biography = 'John is a software engineer.';
    profile.contactInformation = contactInformation;
    profile.preferences = preferences;
    profileSetting.profileId = profile.id;
    profile.addProfileSetting(profileSetting);
  });
  /**
   * Test that createBasicInfoProfile creates a BasicInfoProfile instance with the correct data.
   */
  it('should create a BasicInfoProfile instance', () => {
    // const profile = new Profile('John', 'Doe', 'john.doe@example.com', 'Johnny');
    const basicInfoProfile = ProfileDTOFactory.createBasicInfoProfile(profile);
    expect(basicInfoProfile).toBeInstanceOf(
      ProfileTransferObjects.BasicInfoProfile,
    );
    expect(basicInfoProfile.profileId).toBe(profile.id);
    expect(basicInfoProfile.firstName).toBe('John');
    expect(basicInfoProfile.lastName).toBe('Doe');
    expect(basicInfoProfile.email).toBe('john.doe@example.com');
    expect(basicInfoProfile.otherNames).toEqual('Johnny');
    expect(basicInfoProfile.profilePicture).toBe('http://example.com/profile.jpg');
    expect(basicInfoProfile.biography).toBe('John is a software engineer.');
    expect(basicInfoProfile.contactInformation).toEqual(contactInformation);
    expect(basicInfoProfile.preferences).toEqual(preferences);
    expect(basicInfoProfile.profileSettings.get(profileSetting.id)).toBe(profileSetting);
  });

  /**
   * Test that createBasicInfoProfile throws an error when the input is not a Profile instance.
   */
  it('should throw an error when the input is not a Profile instance', () => {
    expect(() => ProfileDTOFactory.createBasicInfoProfile({})).toThrow(
      ProfileManagementException,
    );
  });

  /**
   * Test that createComprehensiveProfile creates a ComprehensiveProfile instance
   * with the correct data.
   */
  it('should create a ComprehensiveProfile instance', () => {
    // const profile = new Profile('John', 'Doe', 'john.doe@example.com', 'Johnny');
    const education = new Education();
    education.profileId = profile.id;
    profile.addEducation(education);

    const workExperience = new WorkExperience();
    workExperience.profileId = profile.id;
    profile.addWorkExperience(workExperience);

    const activityLog = [{ activity: 'Logged in' }];

    profile.activityLog = activityLog;

    const comprehensiveProfile = ProfileDTOFactory.createComprehensiveProfile(profile);
    expect(comprehensiveProfile).toBeInstanceOf(
      ProfileTransferObjects.ComprehensiveProfile,
    );
    expect(comprehensiveProfile.profileId).toBe(profile.id);
    expect(comprehensiveProfile.firstName).toBe('John');
    expect(comprehensiveProfile.lastName).toBe('Doe');
    expect(comprehensiveProfile.email).toBe('john.doe@example.com');
    expect(comprehensiveProfile.otherNames).toEqual('Johnny');
    expect(comprehensiveProfile.otherNames).toEqual('Johnny');
    expect(comprehensiveProfile.profilePicture).toBe('http://example.com/profile.jpg');
    expect(comprehensiveProfile.biography).toBe('John is a software engineer.');
    expect(comprehensiveProfile.contactInformation).toEqual(contactInformation);
    expect(comprehensiveProfile.preferences).toEqual(preferences);
    expect(comprehensiveProfile.activityLog[0]).toEqual(activityLog[0]);
    expect(comprehensiveProfile.workExperiences.get(workExperience.id)).toBe(workExperience);
    expect(comprehensiveProfile.educations.get(education.id)).toBe(education);
    expect(comprehensiveProfile.profileSettings.get(profileSetting.id)).toBe(profileSetting);
  });

  /**
   * Test that createComprehensiveProfile throws an error when the input is not a Profile instance.
   */
  it('should throw an error when the input is not a Profile instance', () => {
    expect(() => ProfileDTOFactory.createComprehensiveProfile({})).toThrow(
      ProfileManagementException,
    );
  });
});
