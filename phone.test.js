const assert = require('assert');
const {
  isPhone,
  isFixed,
  isMobile,
  isFreeCall,
  isLowCost,
  isHighCost,
  isOther,
  stateByCode,
  stateByNumber
} = require('./index');

describe('spain-phone', () => {
  describe('isPhone', () => {
    it('should return true if is a valid phone number', () => {
      assert.ok(isPhone('907 11 11 11'));
    });

    it('should return false if is longer than 9 chars', () => {
      assert.ok(!isPhone('907 11 11 11 11 11 11'));
    });

    it('should validate when the first char is a 9', () => {
      assert.ok(isPhone('911 11 11 11'));
    });

    it('should validate when the first char is a 8', () => {
      assert.ok(isPhone('811 11 11 11'));
    });

    it('should validate when the first char is a 7', () => {
      assert.ok(isPhone('711 11 11 11'));
    });

    it('should validate when the first char is a 6', () => {
      assert.ok(isPhone('611 11 11 11'));
    });

    it('should validate when the first char is a 5', () => {
      assert.ok(isPhone('511 11 11 11'));
    });

    it('should not validate when the first char is a 0', () => {
      assert.ok(!isPhone('011 11 11 11'));
    });

    it('should return true if it is either fixed or mobile phone', () => {
      assert.ok(isPhone('511 11 11 11'));
      assert.ok(isPhone('611 11 11 11'));
      assert.ok(isPhone('711 11 11 11'));
      assert.ok(isPhone('811 11 11 11'));
      assert.ok(isPhone('911 11 11 11'));
    });

    it('should return false if it is neither fixed or mobile phone', () => {
      assert.ok(!isPhone('011 11 11 11'));
      assert.ok(!isPhone('111 11 11 11'));
      assert.ok(!isPhone('211 11 11 11'));
      assert.ok(!isPhone('311 11 11 11'));
      assert.ok(!isPhone('411 11 11 11'));
    });
  });

  describe('isFixed', () => {
    it('should return true when it is a fixed phone number', () => {
      assert.ok(isFixed('511 11 11 11'));
      assert.ok(isFixed('811 11 11 11'));
      assert.ok(isFixed('911 11 11 11'));
    });

    it('should return false if it does not have the correct length', () => {
      assert.ok(!isFixed('511'));
      assert.ok(!isFixed('811'));
      assert.ok(!isFixed('911'));
    });
  });

  describe('isMobile', () => {
    it('should return true when it is a mobile phone number', () => {
      assert.ok(isMobile('611 11 11 11'));
      assert.ok(isMobile('711 11 11 11'));
    });

    it('should return false if it does not have the correct length', () => {
      assert.ok(!isMobile('611'));
      assert.ok(!isMobile('711'));
    });
  });

  describe('isFreeCall', () => {
    it('should return true if the it is a free call', () => {
      assert.ok(isFreeCall('900 11 11 11'));
      assert.ok(isFreeCall('800 11 11 11'));
    });

    it('should return false when it is not a free call', () => {
      assert.ok(!isFreeCall('611 11 11 11'));
      assert.ok(!isFreeCall('711 11 11 11'));
    });
  });

  describe('isLowCost', () => {
    it('should return true if it is a low cost call', () => {
      assert.ok(isLowCost('901 11 11 11'));
      assert.ok(isLowCost('902 11 11 11'));
    });

    it('should return false when it is not a low cost call', () => {
      assert.ok(!isLowCost('900 11 11 11'));
      assert.ok(!isLowCost('903 11 11 11'));
    });
  });

  describe('isHighCost', () => {
    it('should return true if it is a high cost call', () => {
      assert.ok(isHighCost('905 11 11 11'));
      assert.ok(isHighCost('907 11 11 11'));
      assert.ok(isHighCost('803 11 11 11'));
      assert.ok(isHighCost('806 11 11 11'));
      assert.ok(isHighCost('807 11 11 11'));
    });

    it('should return true if it is not a high cost call', () => {
      assert.ok(!isHighCost('901 11 11 11'));
      assert.ok(!isHighCost('902 11 11 11'));
    });
  });

  describe('isOther', () => {
    it('should return true if it is other type of call', () => {
      assert.ok(isOther('908 11 11 11'));
      assert.ok(isOther('909 11 11 11'));
      assert.ok(isOther('940 11 11 11'));
    });

    it('should return true if it is not other type of call', () => {
      assert.ok(!isOther('901 11 11 11'));
      assert.ok(!isOther('902 11 11 11'));
    });
  });

  describe('stateByCode', () => {
    it('should return two cities', () => {
      assert.deepEqual(stateByCode('956'), ['Cádiz', 'Ceuta']);
    });

    it('should return Valencia', () => {
      assert.deepEqual(stateByCode('960'), ['Valencia']);
    });

    it('should return Barcelona', () => {
      assert.deepEqual(stateByCode('93'), ['Barcelona']);
    });

    it('should return Madrid', () => {
      assert.deepEqual(stateByCode('91'), ['Madrid']);
    });

    it('should return an empty array when it does not find any match', () => {
      assert.deepEqual(stateByCode('33'), []);
    });
  });

  describe('stateByNumber', () => {
    it('should return not return cities with partial numbers', () => {
      assert.deepEqual(stateByNumber('956'), []);
    });

    it('should return two cities', () => {
      assert.deepEqual(stateByNumber('956 26 26 08'), ['Cádiz', 'Ceuta']);
    });

    it('should return Valencia', () => {
      assert.deepEqual(stateByNumber('960 11 11 11'), ['Valencia']);
    });

    it('should return Barcelona', () => {
      assert.deepEqual(stateByNumber('934 58 78 60'), ['Barcelona']);
    });

    it('should return Madrid', () => {
      assert.deepEqual(stateByNumber('915 91 38 56'), ['Madrid']);
    });

    it('should return an empty array when it does not find any match', () => {
      assert.deepEqual(stateByNumber('333 91 38 56'), []);
    });
  });
});
