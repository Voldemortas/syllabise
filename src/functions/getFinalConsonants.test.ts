import {getFinalConsonants} from './getFinalConsonants'

describe('test getFinalConsonants', () => {
  let word: string
  let remainder: string
  let finalConsonants: string
  afterEach(() => {
    expect(getFinalConsonants(word)).toMatchObject({remainder, finalConsonants})
  })

  test('should find consonants in CVC sequence', () => {
    word = 'jis'
    remainder = 'ji'
    finalConsonants = 's'
  })

  test('should find consonants in CV sequence', () => {
    word = 'ji'
    remainder = 'ji'
    finalConsonants = ''
  })

  test('should find consonants in VC sequence', () => {
    word = 'in'
    remainder = 'i'
    finalConsonants = 'n'
  })
})
