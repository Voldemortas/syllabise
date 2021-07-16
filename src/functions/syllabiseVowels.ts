import {joined, glide, semi, long} from '../phonemes'

const pattern = new RegExp(
  `([${joined.V}]${semi}?${long}?(?:[${joined.V}]${glide}${semi}?)?)`,
  'g'
)

const semiConsonantPattern = new RegExp(`;([${joined.C}]+)`, 'g')

function syllabiseVowels(word: string): string {
  const result = word.replaceAll(pattern, '$1;').replace(/\.$/, '')
  return result
    .replaceAll(semiConsonantPattern, '$1')
    .replaceAll(/;/g, '.')
    .replaceAll('..', '.')
    .replaceAll(/\.$/g, '')
}

export {syllabiseVowels}
