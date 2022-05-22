import {syllabiseSequences} from './syllabiseSequences'

const SHORT_U = 'ʊ'
const LONG_U = 'uː'
const J = 'ʲ'
const UO = 'uə̯'
const FIRS_AU = 'aˑʊ̯'
const LAST_AU = 'ɐʊ̯ˑ'
const S = 's'
const T = 't'
const R = 'r'
const DOT = '.'

describe('test syllabise', () => {
  describe('monosyllabic words', () => {
    let word: string

    afterEach(() => {
      expect(syllabiseSequences(word)).toStrictEqual(word)
    })

    it('should do nothing for V', () => {
      word = SHORT_U
    })

    describe('test (C)(C)CV sequences', () => {
      it('should do nothing for SV', () => {
        word = S + SHORT_U
      })

      it('should do nothing for TV', () => {
        word = T + SHORT_U
      })

      it('should do nothing for RjV', () => {
        word = T + J + SHORT_U
      })

      it('should do nothing for STV', () => {
        word = S + T + SHORT_U
      })

      it('should do nothing for TRV', () => {
        word = T + R + FIRS_AU
      })

      it('should do nothing for SRV', () => {
        word = S + R + LAST_AU
      })

      it('should do nothing for STRV:', () => {
        word = S + T + R + LONG_U
      })

      it('should do nothing for SjTjRjVW', () => {
        word = S + J + T + J + R + J + UO
      })
    })

    describe('test VC(C)(C) sequences', () => {
      it('should do nothing for VS', () => {
        word = SHORT_U + S
      })

      it('should do nothing for VT', () => {
        word = SHORT_U + T
      })

      it('should do nothing for VRj', () => {
        word = SHORT_U + R + J
      })

      it('should do nothing for VTS', () => {
        word = SHORT_U + T + S
      })

      it('should do nothing for VRT', () => {
        word = FIRS_AU + R + T
      })

      it('should do nothing for VRS', () => {
        word = LAST_AU + R + S
      })

      it('should do nothing for V:RTS', () => {
        word = LONG_U + R + T + S
      })

      it('should do nothing for VRjTjSj', () => {
        word = SHORT_U + R + J + T + J + S + J
      })
    })

    describe('test (C)(C)CVC(C)(C) sequences', () => {
      it('should do nothing for SVS', () => {
        word = S + SHORT_U + S
      })

      it('should do nothing for TVT', () => {
        word = T + SHORT_U + T
      })

      it('should do nothing for RjVRj', () => {
        word = R + J + SHORT_U + R + J
      })

      it('should do nothing for STVTS', () => {
        word = S + T + SHORT_U + T + S
      })

      it('should do nothing for TRVRT', () => {
        word = T + R + FIRS_AU + R + T
      })

      it('should do nothing for SRVRV', () => {
        word = S + R + LAST_AU + R + S
      })

      it('should do nothing for STRV:RTS', () => {
        word = S + T + R + LONG_U + R + T + S
      })

      it('should do nothing for SjTjRjVRjTjSj', () => {
        word = S + J + T + J + R + J + SHORT_U + R + J + T + J + S + J
      })
    })
  })

  describe('bisyllabic words', () => {
    let word: string
    let changed: string

    afterEach(() => {
      expect(syllabiseSequences(word)).toStrictEqual(changed)
    })

    describe('test (C)(C)CV(C).(C)CV(C) sequences', () => {
      it('should syllabise VSV', () => {
        word = SHORT_U + S + SHORT_U
        changed = SHORT_U + DOT + S + SHORT_U
      })

      it('should syllabise V:SV', () => {
        word = LONG_U + S + SHORT_U
        changed = LONG_U + DOT + S + SHORT_U
      })

      it('should syllabise SVSV', () => {
        word = FIRS_AU + S + SHORT_U
        changed = FIRS_AU + DOT + S + SHORT_U
      })

      it('should syllabise SV:SV:', () => {
        word = FIRS_AU + S + SHORT_U
        changed = FIRS_AU + DOT + S + SHORT_U
      })

      it('should syllabise VSVS', () => {
        word = SHORT_U + S + LAST_AU + S
        changed = SHORT_U + DOT + S + LAST_AU + S
      })

      it('should syllabise V:SV:S', () => {
        word = LONG_U + S + LONG_U + S
        changed = LONG_U + DOT + S + LONG_U + S
      })

      it('should syllabise SjVWSjVS', () => {
        word = S + J + UO + S + J + UO + S
        changed = S + J + UO + DOT + S + J + UO + S
      })

      it('should syllabise SjV:SjVS', () => {
        word = S + J + LONG_U + S + J + LONG_U + S
        changed = S + J + LONG_U + DOT + S + J + LONG_U + S
      })
    })
  })
})
