const test = require('assert');
const sut = require('../build/cal-ipa');

describe('CAL', () => {
  describe('To IPA', () => {
    it('General case usage, with one-to-one mapping', () => {
      const word = sut.toIpa('dqsry)-dpylypws');
      const wordExpected = 'dqsrj-dpjljpws';
      const vocalised = sut.toIpa("d'qesariya)-d,p,yilyip'wOs");
      const vocalisedExpected = 'dqesarija-ðfilipos';
      test.strictEqual(word, wordExpected, 'sut.toIpa_generic consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toIpa_generic vocalised'
      );
    });
    it('Word with (yi) => (i;) mapping', () => {
      const word = sut.toIpa('dylydwth');
      const wordExpected = 'djljdwth';
      const vocalised = sut.toIpa("d'yilyid,wut,eh");
      const vocalisedExpected = 'diliðuθeh';
      test.strictEqual(word, wordExpected, 'sut.toIpa_yi consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sut.toIpa_yi vocalised');
    });
    it('Word with short Eastern (E) => (e) mapping', () => {
      const word = sut.toIpa(')wld');
      const wordExpected = 'wld';
      const vocalised = sut.toIpa(')awlEd');
      const vocalisedExpected = 'awlɛd';
      test.strictEqual(word, wordExpected, 'sut.toIpa_yi consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sut.toIpa_yi vocalised');
    });
    it('Word with (wu) => (uO) mapping', () => {
      const word = sut.toIpa('lb(ldbbykwn');
      const wordExpected = 'lbʕldbbjkwn';
      const vocalised = sut.toIpa("lab,(eld'b,ob,ayk'wun");
      const vocalisedExpected = 'lavʕeldvɑvajkun';
      test.strictEqual(word, wordExpected, 'sut.toIpa_wu consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sut.toIpa_wu vocalised');
    });
    it('Word with (wO) => (oO) mapping', () => {
      const word = sut.toIpa(')bhwhy');
      const vocalised = sut.toIpa(')ab,ohawh_y');
      const wordExpected = 'bhwhj';
      const vocalisedExpected = 'avɑhawj';
      test.strictEqual(word, wordExpected, 'sut.toIpa_wO consonant');
      test.strictEqual(vocalised, vocalisedExpected, 'sut.toIpa_wO vocalised');
    });
    it('Word with Palestinian P', () => {
      const word = sut.toIpa(')Pbhwhy');
      const vocalised = sut.toIpa(')aPeb,ohawh_y');
      const wordExpected = 'pbhwhj';
      const vocalisedExpected = 'apevɑhawj';
      test.strictEqual(word, wordExpected, 'sut.toIpa_wO consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toIpa vocalised with P'
      );
    });
    it('Word with Hebrew Shin', () => {
      const word = sut.toIpa(')Pbhwh&');
      const wordExpected = 'pbhwhɬ';
      const vocalised = sut.toIpa(')aPeb,ohawh_&o');
      const vocalisedExpected = 'apevɑhawɬɑ';
      test.strictEqual(word, wordExpected, 'sut.toIpa_wO consonant');
      test.strictEqual(
        vocalised,
        vocalisedExpected,
        'sut.toIpa vocalised with P'
      );
    });
    it('Invalid Rukkakha', () => {
      const word = sut.toIpa(')Pbh,swh&');
      const wordExpected = 'pbhswhɬ';
      test.strictEqual(word, wordExpected, 'sut.toIpa invalid rukkakha');
    });
    it('Standalone Ou', () => {
      const word = sut.toIpa(')PbOh,suwh&');
      const wordExpected = 'pbohsuwhɬ';
      test.strictEqual(word, wordExpected, 'sut.toIpa invalid rukkakha');
    });
    it('Blank word returns blank', () => {
      const word = sut.toIpa('');
      const wordExpected = '';
      test.strictEqual(word, wordExpected, 'sut.toIpa_blank');
    });
    it('Null word returns null', () => {
      const word = sut.toIpa(null);
      const wordExpected = null;
      test.strictEqual(word, wordExpected, 'sut.toIpa_null');
    });
    it('Undefined word returns undefined', () => {
      const word = sut.toIpa(undefined);
      const wordExpected = undefined;
      test.strictEqual(word, wordExpected, 'sut.toIpa_undefined');
    });
    it('0 number as word returns 0', () => {
      const word = sut.toIpa(0);
      const wordExpected = 0;
      test.strictEqual(word, wordExpected, 'sut.toIpa_zero');
    });
  });
  describe('Mapped writing', () => {
    it('Consonants length', () => {
      test.strictEqual(
        sut.mapper.fromWriting.consonants.length,
        sut.mapper.toWriting.consonants.length,
        'Length differs'
      );
      test.ok(
        sut.mapper.fromWriting.consonants.length > 22,
        'Length greater than 22'
      );
    });
    it('Vowels length', () => {
      test.strictEqual(
        sut.mapper.fromWriting.vowels.length,
        sut.mapper.toWriting.vowels.length,
        'Length differs'
      );
      test.ok(
        sut.mapper.fromWriting.vowels.length > 5,
        'Length greater than 5'
      );
    });
    it('Diacritics undefined', () => {
      test.strictEqual(
        sut.mapper.fromWriting.diacritics,
        undefined,
        'from undefined'
      );
      test.strictEqual(
        sut.mapper.fromWriting.diacritics,
        sut.mapper.toWriting.diacritics,
        'to undefined'
      );
    });
  });
});

describe('CAL', () => {
  describe('To IPA', () => {
    it('Blank word returns blank', () => {
      const word = sut.toIpa('');
      const wordExpected = '';
      test.strictEqual(word, wordExpected, 'sut.toIpa_blank');
    });
    it('Null word returns null', () => {
      const word = sut.toIpa(null);
      const wordExpected = null;
      test.strictEqual(word, wordExpected, 'sut.toIpa_null');
    });
    it('Undefined word returns undefined', () => {
      const word = sut.toIpa(undefined);
      const wordExpected = undefined;
      test.strictEqual(word, wordExpected, 'sut.toIpa_undefined');
    });
    it('0 number as word returns 0', () => {
      const word = sut.toIpa(0);
      const wordExpected = 0;
      test.strictEqual(word, wordExpected, 'sut.toIpa_zero');
    });
  });
  describe('Mapped writing', () => {
    it('Consonants length', () => {
      test.strictEqual(
        sut.mapper.fromWriting.consonants.length,
        sut.mapper.toWriting.consonants.length,
        'Length differs'
      );
      test.ok(
        sut.mapper.fromWriting.consonants.length > 22,
        'Length greater than 22'
      );
    });
    it('Vowels length', () => {
      test.strictEqual(
        sut.mapper.fromWriting.vowels.length,
        sut.mapper.toWriting.vowels.length,
        'Length differs'
      );
      test.ok(
        sut.mapper.fromWriting.vowels.length > 5,
        'Length greater than 5'
      );
    });
  });
});
