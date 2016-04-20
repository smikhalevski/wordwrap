import {wordwrap} from './wordwrap';

describe('wordwrap', () => {

  it('can wrap strings with dangling overflow', () => {
    expect(wordwrap(
      'Lorem ipsum dolor ' +
      'sit amet, ' +
      'consectetur-adipiscing ' +
      'elit, sed do eiusmod ' +
      'tempor incididunt ut ' +
      'labore et dolore ' +
      'magna aliqua.',
      20,
      false))
      .toEqual([
        'Lorem ipsum dolor',
        'sit amet,',
        'consectetur-adipiscing',
        // ^0                    ^22
        'elit, sed do eiusmod',
        'tempor incididunt ut',
        'labore et dolore',
        'magna aliqua.'
      ]);
  });

  it('can wrap strings and chop words', () => {
    expect(wordwrap(
      'Lorem ipsum dolor ' +
      'sit amet, ' +
      'consectetur-adipiscing ' +
      'elit, sed do eiusmod ' +
      'tempor incididunt ut ' +
      'labore et dolore ' +
      'magna aliqua.',
      20,
      true))
      .toEqual([
        'Lorem ipsum dolor',
        'sit amet,',
        'consectetur-adipisci',
        // ^0                  ^20
        'ng elit, sed do',
        'eiusmod tempor',
        'incididunt ut labore',
        'et dolore magna',
        'aliqua.'
      ]);
  });

  it('preserves whitespaces on paragraph start', () => {
    expect(wordwrap(
      '   Lorem ipsum dolor sit amet.\n' +
      '   Excepteur sint occaecat cupidatat non proident.\n\n' +
      '   Duis aute irure dolor in reprehenderit in voluptate.',
      20))
      .toEqual([
        '   Lorem ipsum dolor',
        'sit amet.',
        '   Excepteur sint',
        'occaecat cupidatat',
        'non proident.',
        '',
        '   Duis aute irure',
        'dolor in',
        'reprehenderit in',
        'voluptate.'
      ]);
  });

  it('preserves blank lines', () => {
    expect(wordwrap(
      '   Lorem ipsum dolor sit amet.\n' +
      '                                ' +
      '   Duis aute irure dolor in reprehenderit in voluptate.',
      20))
      .toEqual([
        '   Lorem ipsum dolor',
        'sit amet.',
        '',
        'Duis aute irure',
        'dolor in',
        'reprehenderit in',
        'voluptate.'
      ]);
  });

  it('returns empty array for `null` and `undefined`', () => {
    expect(wordwrap(null, 20)).toEqual([]);
    expect(wordwrap(undefined, 20)).toEqual([]);
  });

  it('converts non-string value to string', () => {
    expect(wordwrap({
      toString () {
        return 'foo';
      }
    }, 20)).toEqual(['foo']);
  });
});
