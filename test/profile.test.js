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
   * Test that the constructor throws an error when the firstName is not a non-empty string.
   */
  it('should throw an error when the firstName is not a non-empty string', () => {
    expect(() => new Profile('', 'Doe', 'john.doe@example.com', 'Johnny')).toThrow(ProfileManagementException);
  });

  /**
   * Test that the constructor throws an error when the lastName is not a non-empty string.
   */
  it('should throw an error when the lastName is not a non-empty string', () => {
    expect(() => new Profile('John', '', 'john.doe@example.com', 'Johnny')).toThrow(ProfileManagementException);
  });

  /**
   * Test that the constructor throws an error when the email is not a valid email string.
   */
  it('should throw an error when the email is not a valid email string', () => {
    expect(() => new Profile('John', 'Doe', 'john.doe', 'Johnny')).toThrow(ProfileManagementException);
  });

  /**
   * Test that the constructor throws an error when the otherNames is not a non-empty string.
   */
  it('should throw an error when the otherNames is not a non-empty string', () => {
    expect(() => new Profile('John', 'Doe', 'john.doe@example.com', '')).toThrow(ProfileManagementException);
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
  it('should set and get profile properties', () => {
    profile.firstName = 'Jane';
    profile.lastName = 'Smith';
    profile.email = 'jane.smith@example.com';
    profile.otherNames = 'JS';
    profile.profilePicture = 'http://example.com/jane.jpg';
    profile.biography = 'Jane is a software engineer.';
    profile.contactInformation = {
      phone: '123-456-7890',
      address: '123 Main St, Anytown, USA',
    };
    profile.preferences = { colorScheme: 'dark', language: 'en-US' };
    profile.activityLog = [
      { activity: 'Logged in', timestamp: '2022-01-01T00:00:00Z' },
    ];

    expect(profile.firstName).toBe('Jane');
    expect(profile.lastName).toBe('Smith');
    expect(profile.email).toBe('jane.smith@example.com');
    expect(profile.name).toBe('Jane Smith');
    expect(profile.otherNames).toBe('JS');
    expect(profile.profilePicture).toBe('http://example.com/jane.jpg');
    expect(profile.biography).toBe('Jane is a software engineer.');
    expect(profile.contactInformation).toEqual({
      phone: '123-456-7890',
      address: '123 Main St, Anytown, USA',
    });
    expect(profile.preferences).toEqual({
      colorScheme: 'dark',
      language: 'en-US',
    });
    expect(profile.activityLog).toEqual([
      { activity: 'Logged in', timestamp: '2022-01-01T00:00:00Z' },
    ]);
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
   * Test that the addWorkExperience method throws an error when called with an invalid argument.
   */
  it('should throw an error when adding invalid work experience', () => {
    const invalidWorkExperience = 'not a WorkExperience instance';

    expect(() => {
      profile.addWorkExperience(invalidWorkExperience);
    }).toThrow(
      'Invalid Argument: Work experience must be an instance of WorkExperience.',
    );
  });

  /**
   * Test that the addWorkExperience method throws an error when called with null.
   */
  it('should throw an error when adding null work experience', () => {
    const nullWorkExperience = null;

    expect(() => {
      profile.addWorkExperience(nullWorkExperience);
    }).toThrow(
      'Invalid Argument: Work experience must be an instance of WorkExperience.',
    );
  });

  /**
   * Test that the addWorkExperience method throws an error when called with undefined.
   */
  it('should throw an error when adding undefined work experience', () => {
    const undefinedWorkExperience = undefined;

    expect(() => {
      profile.addWorkExperience(undefinedWorkExperience);
    }).toThrow(
      'Invalid Argument: Work experience must be an instance of WorkExperience.',
    );
  });
  /**
   * Test that adding a work experience with a different profileId throws an error.
   */
  it('should throw an error when adding work experience with different profileId', () => {
    const workExperience = new WorkExperience('differentProfileId', 'companyName', 'jobRole', new Date(), new Date());
    expect(() => {
      profile.addWorkExperience(workExperience);
    }).toThrow('Invalid Argument: Work experience must belong to this profile.');
  });

  /**
   * Test that adding a work experience with the same profileId does not throw an error.
   */
  it('should not throw an error when adding work experience with same profileId', () => {
    const workExperience = new WorkExperience(profile.id, 'companyName', 'jobRole', new Date(), new Date());
    expect(() => {
      profile.addWorkExperience(workExperience);
    }).not.toThrow();
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
   * Test that the addEducation method throws an error when called with an invalid argument.
   */
  it('should throw an error when adding invalid education', () => {
    const invalidEducation = 'not an Education instance';

    expect(() => {
      profile.addEducation(invalidEducation);
    }).toThrow('Invalid Argument: Education must be an instance of Education.');
  });

  /**
   * Test that the addEducation method throws an error when called with null.
   */
  it('should throw an error when adding null education', () => {
    const nullEducation = null;

    expect(() => {
      profile.addEducation(nullEducation);
    }).toThrow('Invalid Argument: Education must be an instance of Education.');
  });

  /**
   * Test that the addEducation method throws an error when called with undefined.
   */
  it('should throw an error when adding undefined education', () => {
    const undefinedEducation = undefined;

    expect(() => {
      profile.addEducation(undefinedEducation);
    }).toThrow('Invalid Argument: Education must be an instance of Education.');
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

  /**
   * Test that the addProfileSetting method correctly adds a profile setting to the profile.
   */
  test('should be able to add profile setting', () => {
    const profileSetting = new ProfileSetting();
    profileSetting.profileId = profile.id;
    profile.addProfileSetting(profileSetting);
    expect(profile.profileSettings.get(profileSetting.id)).toBe(profileSetting);
  });

  /**
   * Test that the addProfileSetting method throws an error when called with an invalid argument.
   */
  it('should throw an error when adding invalid profile setting', () => {
    const invalidProfileSetting = 'not a ProfileSetting instance';

    expect(() => {
      profile.addProfileSetting(invalidProfileSetting);
    }).toThrow(
      'Invalid Argument: Profile setting must be an instance of ProfileSetting.',
    );
  });

  /**
   * Test that the addProfileSetting method throws an error when called with null.
   */
  it('should throw an error when adding null profile setting', () => {
    const nullProfileSetting = null;

    expect(() => {
      profile.addProfileSetting(nullProfileSetting);
    }).toThrow(
      'Invalid Argument: Profile setting must be an instance of ProfileSetting.',
    );
  });

  /**
   * Test that the addProfileSetting method throws an error when called with undefined.
   */
  it('should throw an error when adding undefined profile setting', () => {
    const undefinedProfileSetting = undefined;

    expect(() => {
      profile.addProfileSetting(undefinedProfileSetting);
    }).toThrow(
      'Invalid Argument: Profile setting must be an instance of ProfileSetting.',
    );
  });
  /**
   * Test that adding a profile setting with a different profileId throws an error.
   */
  it('should throw an error when adding profile setting with different profileId', () => {
    const profileSetting = new ProfileSetting('differentProfileId');
    expect(() => {
      profile.addProfileSetting(profileSetting);
    }).toThrow('Invalid Argument: Profile setting must belong to this profile.');
  });

  /**
   * Test that adding a profile setting with the same profileId does not throw an error.
   */
  it('should not throw an error when adding profile setting with same profileId', () => {
    const profileSetting = new ProfileSetting(profile.id);
    expect(() => {
      profile.addProfileSetting(profileSetting);
    }).not.toThrow();
  });
});
