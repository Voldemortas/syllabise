import {syllabiseVowels, syllabiseSequences} from './functions'

function syllabise(word: string): string {
  return syllabiseVowels(syllabiseSequences(word))
}

export {syllabise}
