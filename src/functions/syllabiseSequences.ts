const syllablePatterns: string[] = require('../../syllabiseBoundaries.json')
import {joined} from '../phonemes'

function syllabiseSequences(word: string): string {
  let result = word
  const regexPatterns: {input: RegExp; replace: string}[] =
    syllablePatterns.map((e) => {
      const input = e
        .replaceAll('.', '')
        .replaceAll('V', `(${joined.Vm})`)
        .replaceAll('S', `(${joined.S})`)
        .replaceAll('T', `(${joined.T})`)
        .replaceAll('R', `(${joined.R})`)

      let index = 1

      const replace = e
        .split('')
        .map((symbol) => (symbol !== '.' ? `$${index++}` : '.'))
        .join('')
      return {input: new RegExp(input, 'g'), replace}
    })

  regexPatterns.forEach((pattern) => {
    result = result.replaceAll(pattern.input, pattern.replace)
  })

  return result
}

export {syllabiseSequences}
