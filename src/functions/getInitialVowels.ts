import {joined} from '../phonemes'

const initialVowelsPattern = new RegExp(`([${joined.Vm}]+)?(.+)`, 'g')

function getInitialVowels(word: string): {
  remainder: string
  initialVowels: string
} {
  const splitWord = Array.from(word.matchAll(initialVowelsPattern))[0]

  return {remainder: splitWord[2] ?? '', initialVowels: splitWord[1] ?? ''}
}

export {getInitialVowels}
