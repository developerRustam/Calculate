import { describe, expect, it, vi } from 'vitest';
import generatePasswords from './generationPassword';

describe('generatePasswords', () => {
  it('generates ten passwords with the requested length', () => {
    const passwords = generatePasswords(12, true, true, true, true);

    expect(passwords).toHaveLength(10);
    expect(passwords.every((password) => password.length === 12)).toBe(true);
  });

  it('rejects password lengths outside the supported range', () => {
    expect(() => generatePasswords(5, true, true, true, true)).toThrow(RangeError);
    expect(() => generatePasswords(65, true, true, true, true)).toThrow(RangeError);
  });

  it('includes every selected character category in each password', () => {
    const getRandomValues = vi.spyOn(globalThis.crypto, 'getRandomValues').mockImplementation((values) => {
      (values as Uint32Array)[0] = 0;
      return values;
    });

    const passwords = generatePasswords(8, true, true, true, true);

    expect(passwords.every((password) => /[A-Z]/.test(password))).toBe(true);
    expect(passwords.every((password) => /[a-z]/.test(password))).toBe(true);
    expect(passwords.every((password) => /\d/.test(password))).toBe(true);
    expect(passwords.every((password) => /[%*)?@#$~]/.test(password))).toBe(true);
    getRandomValues.mockRestore();
  });

  it('uses the Web Crypto API as its random source', () => {
    const getRandomValues = vi.spyOn(globalThis.crypto, 'getRandomValues');

    generatePasswords(12, true, true, true, true);

    expect(getRandomValues).toHaveBeenCalled();
    getRandomValues.mockRestore();
  });

  it('supports lengths larger than the selected character set', () => {
    const passwords = generatePasswords(64, false, false, true, false);

    expect(passwords).toHaveLength(10);
    expect(passwords.every((password) => password.length === 64)).toBe(true);
    expect(passwords.every((password) => /^\d+$/.test(password))).toBe(true);
  });
});
