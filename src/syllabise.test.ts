import {syllabise} from './syllabise'

describe('test combined syllabise', () => {
  const testingData: {input: string; expectedOutput: string}[] = [
    {
      input: 'ɐpʲʃʲɛrʲkʲʃʲnʲɪjʊsʲiə̯ms',
      expectedOutput: 'ɐpʲ.ʃʲɛrʲkʲ.ʃʲnʲɪ.jʊ.sʲiə̯ms',
    },
    {input: 'nʊsʲɪiˑrʲtʲɪ', expectedOutput: 'nʊ.sʲɪ.iˑrʲ.tʲɪ'},
    {input: 'nʊsʲɪiˑrk', expectedOutput: 'nʊ.sʲɪ.iˑrk'},
    {input: 'ʊsʲpʲrʲɪnˑks', expectedOutput: 'ʊ.sʲpʲrʲɪnˑks'},
    {input: 'ʊsʲpʲrʲɪnˑkstɐmɛ', expectedOutput: 'ʊ.sʲpʲrʲɪnˑk.stɐ.mɛ'},
    {input: 'ɐʊ̯ˑsʲɪs', expectedOutput: 'ɐʊ̯ˑ.sʲɪs'},
    {input: 'pɐɐʊ̯ˑsʲiːs', expectedOutput: 'pɐ.ɐʊ̯ˑ.sʲiːs'},
  ]
  test('should match calculated values with expected ones', () => {
    testingData.forEach((data) => {
      expect(syllabise(data.input)).toStrictEqual(data.expectedOutput)
    })
  })
})
