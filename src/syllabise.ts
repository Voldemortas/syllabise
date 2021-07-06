import {joined} from './phonemes'
import {getFinalConsonants, getInitialVowels} from './functions/index'

const syllabise = (word: string): string => {
  const splitWord = getFinalConsonants(word)

  const splitWord2 = getInitialVowels(splitWord.remainder)

  const endConsonants = splitWord.finalConsonants
  const startVowels = splitWord2.initialVowels
  const medialWord = splitWord2.remainder

  return word
}

export {syllabise}
