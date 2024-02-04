/* eslint-disable linebreak-style */
/* eslint-disable no-new */
/* eslint-disable no-undef */
import { NIL as NIL_UUID } from 'uuid';
import { BaseDomain } from '../../src/seedwork'; // adjust the path to your BaseDomain class
import ProfileManagementException from '../../src/ProfileManagementException'; // adjust the path to your exceptions

describe('BaseDomain class', () => {
  /**
   * Test that the id setter throws an error when called with null.
   */
  it('should throw an error when setting null id', () => {
    expect(() => {
      new BaseDomain(null).id = null;
    }).toThrow(ProfileManagementException);
  });

  /**
   * Test that the id setter throws an error when called with undefined.
   */
  it('should throw an error when setting undefined id', () => {
    expect(() => {
      new BaseDomain(undefined).id = undefined;
    }).toThrow(ProfileManagementException);
  });

  /**
   * Test that the id setter throws an error when called with NIL_UUID.
   */
  it('should throw an error when setting NIL_UUID id', () => {
    expect(() => {
      new BaseDomain(NIL_UUID).id = '00000000-0000-0000-0000-000000000000';
    }).toThrow(ProfileManagementException);
  });
  /**
   * Test that the id setter throws an error when called with a non-number and non-string.
   */
  it('should throw an error when setting id with a non-number and non-string', () => {
    expect(() => {
      new BaseDomain(null).id = {};
    }).toThrow(Error);
  });

  /**
   * Test that the id setter does not throw an error when called with a number.
   */
  it('should not throw an error when setting id with a number', () => {
    expect(() => {
      new BaseDomain(undefined).id = 123;
    }).not.toThrow();
  });

  /**
   * Test that the id setter does not throw an error when called with a string.
   */
  it('should not throw an error when setting id with a string', () => {
    expect(() => {
      new BaseDomain(undefined).id = '123';
    }).not.toThrow();
  });
  /**
   * Test that the equals method returns true when comparing
   * two BaseDomain instances with the same id.
   */
  it('should return true when comparing two BaseDomain instances with the same id', () => {
    const baseDomain1 = new BaseDomain('123');
    const baseDomain2 = new BaseDomain('123');
    expect(baseDomain1.equals(baseDomain2)).toBe(true);
  });

  /**
   * Test that the equals method returns false when comparing
   * two BaseDomain instances with different ids.
   */
  it('should return false when comparing two BaseDomain instances with different ids', () => {
    const baseDomain1 = new BaseDomain('123');
    const baseDomain2 = new BaseDomain('456');
    expect(baseDomain1.equals(baseDomain2)).toBe(false);
  });

  /**
   * Test that the equals method returns false when comparing
   * a BaseDomain instance with a non-BaseDomain instance.
   */
  it('should return false when comparing a BaseDomain instance with a non-BaseDomain instance', () => {
    const baseDomain = new BaseDomain('123');
    const nonBaseDomain = { id: '123' };
    expect(baseDomain.equals(nonBaseDomain)).toBe(false);
  });
  /**
   * Test that the isTransient method returns true when the id is null, undefined, or NIL_UUID.
   */
  it('should return true when the id is null, undefined, or NIL_UUID', () => {
    const baseDomain1 = new BaseDomain(null);
    const baseDomain2 = new BaseDomain(undefined);
    const baseDomain3 = new BaseDomain('00000000-0000-0000-0000-000000000000');
    expect(baseDomain1.isTransient()).toBe(true);
    expect(baseDomain2.isTransient()).toBe(true);
    expect(baseDomain3.isTransient()).toBe(true);
  });

  /**
   * Test that the isTransient method returns false when the id is not null, undefined, or NIL_UUID.
   */
  it('should return false when the id is not null, undefined, or NIL_UUID', () => {
    const baseDomain = new BaseDomain('123');
    expect(baseDomain.isTransient()).toBe(false);
  });

  /**
   * Test that the generateId method throws an error when the domain is not transient.
   */
  it('should throw an error when the domain is not transient', () => {
    const baseDomain = new BaseDomain('123');
    expect(() => {
      baseDomain.generateId();
    }).toThrow(ProfileManagementException);
  });

  /**
   * Test that the generateId method does not throw an error when the domain is transient.
   */
  it('should not throw an error when the domain is transient', () => {
    const baseDomain = new BaseDomain(null);
    expect(() => {
      baseDomain.generateId();
    }).not.toThrow();
  });
});
