/** @module calIpa */

import { Writing, Mapper } from 'aramaic-mapper';
import {
  allConsonants as calConsonants,
  vowels as calVowels,
  isDiacritic
} from 'cal-code-util';
import {
  consonants,
  commonVowels,
  easternVowels,
  begadkepatMap
} from 'ipa-code-util';

/**
 * @private
 * CAL source writing
 * @const
 * @type { Writing }
 */
const calWriting = new Writing(calConsonants, calVowels);

/**
 * @private
 * IPA destination writing
 * @const
 * @type { Writing }
 */
const ipaWriting = new Writing(
  Object.freeze(consonants.concat('p', 'ɬ')), // + Palestinian P and Hebrew Shin
  Object.freeze(commonVowels.concat(easternVowels))
);

/**
 * @private
 * Customized mapping callback
 * @param { string } word input word
 * @param { number } i current index in the word
 * @param { Object.<string, string> } fromTo mapping dictionary
 * @returns { string } IPA mapped char
 */
const callback = (word, i, fromTo) => {
  const c = word.charAt(i);
  // Alap is silent always in present day pronunciation.
  // Diacritics were processed already in prior iteration.
  if (c === ')' || isDiacritic(c)) {
    return '';
  }

  const n = word.charAt(i + 1);
  let m;
  switch (n) {
    case ',':
      m = begadkepatMap[c];
      if (m) {
        return m;
      }
      break;
    case '_':
      return '';
    case 'i':
    case 'e':
      if (c === 'y') {
        return '';
      }
      break;
    case 'u':
    case 'O':
      if (c === 'w') {
        return '';
      }
      break;
    default:
      break;
  }
  return fromTo[c] || c;
};

/**
 * IPA Mapper
 * @const
 * @type { Mapper }
 */
export const mapper = new Mapper(calWriting, ipaWriting, callback);

/**
 * Convert from CAL to IPA Unicode
 * @static
 * @param {string} word input word in CAL code transliteration
 * @returns {string} the input word converted to IPA Unicode
 */
export const toIpa = word => mapper.map(word);
