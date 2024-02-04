/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import { v4, NIL as NILL_UUID } from 'uuid';
import { Education } from '../src/profile-core'; // adjust the path to your Education class

describe('Education class', () => {
  let education;

  beforeEach(() => {
    education = new Education(v4());
  });

  /**
   * Test that the profileId setter and getter work correctly.
   */
  it('should set and get profileId', () => {
    expect(education.profileId).not.toBe(NILL_UUID);
  });

  /**
   * Test that the profileId setter throws an error when called with an empty string.
   */
  it('should throw an error when setting empty profileId', () => {
    expect(() => {
      education.profileId = '';
    }).toThrow('Invalid argument: Profile ID cannot be null or empty.');
  });

  /**
   * Test that the profileId setter throws an error when called with undefined.
   */
  it('should throw an error when setting undefined profileId', () => {
    expect(() => {
      education.profileId = undefined;
    }).toThrow('Invalid argument: Profile ID cannot be null or empty.');
  });

  /**
   * Test that the institution setter and getter work correctly.
   */
  it('should set and get institution', () => {
    education.institution = 'Test University';
    expect(education.institution).toBe('Test University');
  });

  /**
   * Test that the institution setter throws an error when called with an invalid argument.
   */
  it('should throw an error when setting invalid institution', () => {
    expect(() => {
      education.institution = '';
    }).toThrow('Invalid argument: Institution cannot be null or empty.');

    expect(() => {
      education.institution = undefined;
    }).toThrow('Invalid argument: Institution cannot be null or empty.');

    expect(() => {
      education.institution = 123;
    }).toThrow('Invalid argument: Institution cannot be null or empty.');
  });

  /**
   * Test that the awardTitle setter and getter work correctly.
   */
  it('should set and get awardTitle', () => {
    education.awardTitle = 'Test Award';
    expect(education.awardTitle).toBe('Test Award');
  });

  /**
   * Test that the awardTitle setter throws an error when called with an invalid argument.
   */
  it('should throw an error when setting invalid awardTitle', () => {
    expect(() => {
      education.awardTitle = '';
    }).toThrow('Invalid argument: Award title cannot be null or empty.');

    expect(() => {
      education.awardTitle = undefined;
    }).toThrow('Invalid argument: Award title cannot be null or empty.');

    expect(() => {
      education.awardTitle = 123;
    }).toThrow('Invalid argument: Award title cannot be null or empty.');
  });

  /**
   * Test that the awardType getter works correctly.
   */
  it('should get awardType', () => {
    expect(education.awardType).toBeUndefined(); // assuming awardType is undefined by default
  });

  /**
   * Test that the awardType getter works correctly.
   */
  it('should get awardType', () => {
    education.awardType = 'Test Award Type';
    expect(education.awardType).toBe('Test Award Type'); // assuming awardType is undefined by default
  });
  /**
   * Test that the awardType setter throws an error when called with an empty string.
   */
  it('should throw an error when setting empty awardType', () => {
    expect(() => {
      education.awardType = '';
    }).toThrow('Invalid argument: Award type cannot be null or empty.');
  });

  /**
   * Test that the awardType setter throws an error when called with undefined.
   */
  it('should throw an error when setting undefined awardType', () => {
    expect(() => {
      education.awardType = undefined;
    }).toThrow('Invalid argument: Award type cannot be null or empty.');
  });

  /**
   * Test that the awardType setter throws an error when called with a non-string value.
   */
  it('should throw an error when setting non-string awardType', () => {
    expect(() => {
      education.awardType = 123;
    }).toThrow('Invalid argument: Award type cannot be null or empty.');
  });

  /**
   * Test that the awardType getter works correctly.
   */
  it('should get year', () => {
    expect(education.year).toBeUndefined(); // assuming awardType is undefined by default
  });

  /**
   * Test that the year setter and getter work correctly.
   */
  it('should set and get year', () => {
    education.year = 2022;
    expect(education.year).toBe(2022);
  });
  /**
   * Test that the year setter throws an error when called with an empty string.
   */
  it('should throw an error when setting empty year', () => {
    expect(() => {
      education.year = '';
    }).toThrow('Invalid argument: Year cannot be null or empty.');
  });

  /**
   * Test that the year setter throws an error when called with undefined.
   */
  it('should throw an error when setting undefined year', () => {
    expect(() => {
      education.year = undefined;
    }).toThrow('Invalid argument: Year cannot be null or empty.');
  });

  /**
   * Test that the year setter throws an error when called with a non-number value.
   */
  it('should throw an error when setting non-number year', () => {
    expect(() => {
      education.year = '2022';
    }).toThrow('Invalid argument: Year cannot be null or empty.');
  });

  /**
   * Test that the validationLink setter and getter work correctly.
   */
  it('should set and get validationLink', () => {
    education.validationLink = 'http://test.com';
    expect(education.validationLink).toBe('http://test.com');
  });

  /**
   * Test that the credentialUpload setter and getter work correctly.
   */
  it('should set and get credentialUpload', () => {
    education.credentialUpload = 'http://test.com/upload';
    expect(education.credentialUpload).toBe('http://test.com/upload');
  });
});
