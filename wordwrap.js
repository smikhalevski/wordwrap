/**
 * Soft-wraps a string at a given number of characters.
 *
 * Leading spaces are preserved at the beginning of new paragraph
 * (after line feed), because they are considered to be first-line
 * padding. Spaces at the end of line are always trimmed.
 *
 * @function
 * @name wordwrap
 * @param {String} val Text to wrap.
 * @param {Number} length Maximum number of characters in line.
 * @param {Boolean} [breakWord = false] If set to `true`, value is always
 *        wrapped at or before the specified width. So if you have
 *        a word that is larger than the given width, it is broken
 *        apart. If `false` the function does not split the word even
 *        if the width is smaller than the word width.
 * @return {Array.<String>} List of lines which do not contain newline
 *         character or empty array if `val` is undefined.
 * @example
 * wordwrap(
 *   '   Lorem ipsum dolor sit amet.\n' +
 *   '                                ' +
 *   '   Duis aute irure dolor in reprehenderit in voluptate.',
 *   20);
 *
 * // → [
 * //   '   Lorem ipsum dolor',
 * //   'sit amet.',
 * //   '',
 * //   'Duis aute irure',
 * //   'dolor in',
 * //   'reprehenderit in',
 * //   'voluptate.'
 * // ]
 */
module.exports = function wordwrap(val, length, breakWord = false) {
  length--;
  if (val != null && length > 0) {
    // Line begins after newline or non-space char.
    // Line ends before space char of end of line.
    var re = `(?=^|\\S)(.{0,${length}}\\S(?=\\s|$)${breakWord ? `|.{${length}}\\S` : ''}|.*?(?=\\s|$))`;
    return String(val).match(new RegExp(re, 'gm'));
  }
  return [];
};
