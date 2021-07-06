import {joined, glide, semi, long, V} from '../phonemes'

const pattern = new RegExp(
  `([${joined.V}]${semi}?${long}?(?:[${joined.V}]${glide}${semi}?)?)`,
  'g'
)

function syllabiseVowels(word: string): string {
  const result = word.replaceAll(pattern, '$1.').replace(/\.$/, '')
  return result
}

export {syllabiseVowels}
