/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import { v4, NIL as NILL_UUID } from 'uuid';
import { WorkExperience } from '../src/profile-core'; // adjust the path to your WorkExperience class

describe('WorkExperience class', () => {
  let workExperience;

  beforeEach(() => {
    workExperience = new WorkExperience(
      v4(),
      'companyName',
      'jobRole',
      new Date(),
      new Date(),
    );
  });

  /**
   * Test that the profileId setter and getter work correctly.
   */
  it('should set and get profileId', () => {
    expect(workExperience.profileId).not.toBe(NILL_UUID);
  });

  /**
   * Test that the profileId setter throws an error when called with an empty string.
   */
  it('should throw an error when setting empty profileId', () => {
    expect(() => {
      workExperience.profileId = '';
    }).toThrow('Invalid argument: Profile ID cannot be null or empty.');
  });

  /**
   * Test that the profileId setter throws an error when called with undefined.
   */
  it('should throw an error when setting undefined profileId', () => {
    expect(() => {
      workExperience.profileId = undefined;
    }).toThrow('Invalid argument: Profile ID cannot be null or empty.');
  });

  /**
   * Test that the id setter and getter work correctly.
   */
  it('should set and get id', () => {
    workExperience.id = 'newId';
    expect(workExperience.id).toBe('newId');
  });

  /**
   * Test that the companyName setter and getter work correctly.
   */
  it('should set and get companyName', () => {
    workExperience.companyName = 'newCompanyName';
    expect(workExperience.companyName).toBe('newCompanyName');
  });

  /**
   * Test that the jobRole setter and getter work correctly.
   */
  it('should set and get jobRole', () => {
    workExperience.jobRole = 'newJobRole';
    expect(workExperience.jobRole).toBe('newJobRole');
  });
  /**
   * Test that the jobRole setter throws an error when called with null.
   */
  it('should throw an error when setting null jobRole', () => {
    expect(() => {
      workExperience.jobRole = null;
    }).toThrow('Invalid argument: Job role cannot be null or undefined.');
  });

  /**
   * Test that the jobRole setter throws an error when called with undefined.
   */
  it('should throw an error when setting undefined jobRole', () => {
    expect(() => {
      workExperience.jobRole = undefined;
    }).toThrow('Invalid argument: Job role cannot be null or undefined.');
  });

  /**
   * Test that the startDate setter and getter work correctly.
   */
  it('should set and get startDate', () => {
    const newStartDate = new Date();
    workExperience.startDate = newStartDate;
    expect(workExperience.startDate).toEqual(newStartDate);
  });
  /**
   * Test that the startDate setter throws an error when called with null.
   */
  it('should throw an error when setting null startDate', () => {
    expect(() => {
      workExperience.startDate = null;
    }).toThrow('Invalid argument: Start date cannot be null or undefined.');
  });

  /**
   * Test that the startDate setter throws an error when called with undefined.
   */
  it('should throw an error when setting undefined startDate', () => {
    expect(() => {
      workExperience.startDate = undefined;
    }).toThrow('Invalid argument: Start date cannot be null or undefined.');
  });

  /**
   * Test that the endDate setter and getter work correctly.
   */
  it('should set and get endDate', () => {
    const newEndDate = new Date();
    workExperience.endDate = newEndDate;
    expect(workExperience.endDate).toEqual(newEndDate);
  });

  /**
   * Test that the endDate setter throws an error when called with null.
   */
  it('should throw an error when setting null endDate', () => {
    expect(() => {
      workExperience.endDate = null;
    }).toThrow('Invalid argument: End date cannot be null or undefined.');
  });

  /**
   * Test that the endDate setter throws an error when called with undefined.
   */
  it('should throw an error when setting undefined endDate', () => {
    expect(() => {
      workExperience.endDate = undefined;
    }).toThrow('Invalid argument: End date cannot be null or undefined.');
  });
  /**
   * Test that the roleDescription setter and getter work correctly.
   */
  it('should set and get roleDescription', () => {
    workExperience.roleDescription = 'newRoleDescription';
    expect(workExperience.roleDescription).toBe('newRoleDescription');
  });
  /**
   * Test that the roleDescription setter throws an error when called with null.
   */
  it('should throw an error when setting null roleDescription', () => {
    expect(() => {
      workExperience.roleDescription = null;
    }).toThrow(
      'Invalid argument: Role description cannot be null or undefined.',
    );
  });

  /**
   * Test that the roleDescription setter throws an error when called with undefined.
   */
  it('should throw an error when setting undefined roleDescription', () => {
    expect(() => {
      workExperience.roleDescription = undefined;
    }).toThrow(
      'Invalid argument: Role description cannot be null or undefined.',
    );
  });
});
