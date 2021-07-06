import {joined} from '../phonemes'

const finalConsonantsPattern = new RegExp(
  `([${joined.Vm}${joined.C}]*(?:[${joined.Vm}]+))?([${joined.C}]+)?`,
  'g'
)

function getFinalConsonants(word: string): {
  remainder: string
  finalConsonants: string
} {
  const splitWord = Array.from(word.matchAll(finalConsonantsPattern))[0]

  return {remainder: splitWord[1] ?? '', finalConsonants: splitWord[2] ?? ''}
}

export {getFinalConsonants}
