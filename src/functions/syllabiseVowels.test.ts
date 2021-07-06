import {syllabiseVowels} from './syllabiseVowels'

describe('test syllabiseVowels', () => {
  let word: string
  let result: string

  afterEach(() => {
    expect(syllabiseVowels(word)).toStrictEqual(result)
  })

  describe('should return the same as output', () => {
    test(`should do nothing to VW `, () => {
      word = 'uə̯'
      result = 'uə̯'
    })

    test(`should do nothing to V'W`, () => {
      word = 'aˑʊ̯'
      result = 'aˑʊ̯'
    })

    test(`should do nothing to VW'`, () => {
      word = 'ɐʊ̯ˑ'
      result = 'ɐʊ̯ˑ'
    })

    test(`should do nothing to V:`, () => {
      word = 'eː'
      result = 'eː'
    })
  })

  describe('add syllable break', () => {
    test(`should add add dot for VVW `, () => {
      word = 'ɐuə̯'
      result = 'ɐ.uə̯'
    })

    test(`should add add dot for VWW `, () => {
      word = 'uə̯ɐ'
      result = 'uə̯.ɐ'
    })

    test(`should add add dot for VV'W`, () => {
      word = 'ɐaˑʊ̯'
      result = 'ɐ.aˑʊ̯'
    })

    test(`should add add dot for V'WV`, () => {
      word = 'aˑʊ̯ɐ'
      result = 'aˑʊ̯.ɐ'
    })

    test(`should add add dot for VVW'`, () => {
      word = 'ɐɐʊ̯ˑ'
      result = 'ɐ.ɐʊ̯ˑ'
    })

    test(`should add add dot for VW'V`, () => {
      word = 'ɐʊ̯ˑɐ'
      result = 'ɐʊ̯ˑ.ɐ'
    })

    test(`should add add dot for V:V`, () => {
      word = 'eːɐ'
      result = 'eː.ɐ'
    })

    test(`should add add dot for V:V:`, () => {
      word = 'eːeː'
      result = 'eː.eː'
    })
  })
})
