const V = ['ɪ', 'ʊ', 'ɛ', 'ɔ', 'ɐ', 'i', 'u', 'e', 'o', 'æ', 'a', 'ə']

const S = ['s', 'z', 'ʃ', 'ʒ', 't͡s', 'd͡z', 't͡ʃ', 'd͡ʒ']
const T = ['p', 'b', 't', 'd', 'k', 'g', 'x', 'ɣ', 'f']
const R = ['ɫ', 'l', 'm', 'n', 'r', 'j', 'ʋ']

const palatalised = 'ʲ'
const glide = '̯'
const semi = 'ˑ'
const long = 'ː'

const joined = {
  C: S.join('') + T.join('') + R.join('') + palatalised + semi,
  S: `[${S.join('')}]${palatalised}?${semi}?`,
  T: `[${T.join('')}]${palatalised}?${semi}?`,
  R: `[${R.join('')}]${palatalised}?${semi}?`,
  V: V.join(''),
  Vm: `[${V.join('')}]${glide}?${palatalised}?${semi}?`,
}

export {joined, glide, semi, long}
