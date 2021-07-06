import {getInitialVowels} from './getInitialVowels'

describe('test getInitialVowels', () => {
  let word: string
  let remainder: string
  let initialVowels: string
  afterEach(() => {
    expect(getInitialVowels(word)).toMatchObject({remainder, initialVowels})
  })

  test('should find vowels in CV... sequence', () => {
    word = 'jisai'
    remainder = 'jisai'
    initialVowels = ''
  })

  test('should find vowels in VC.. sequence', () => {
    word = 'isai'
    remainder = 'sai'
    initialVowels = 'i'
  })
})
