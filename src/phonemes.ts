const V = ['ɪ', 'ʊ', 'ɛ', 'ɔ', 'ɐ', 'i', 'u', 'e', 'o', 'æ', 'a', 'ə']

const S = ['s', 'z', 'ʃ', 'ʒ', 't͡s', 'd͡z', 't͡ʃ', 'd͡ʒ']
const T = ['p', 'b', 't', 'd', 'k', 'g', 'x', 'ɣ', 'f']
const R = ['ɫ', 'l', 'm', 'n', 'r', 'j', 'ʋ']

const palatalised = 'ʲ'
const glide = '̯'
const semi = 'ˑ'
const long = 'ː'

const mods = [glide, semi, long]

const joined = {
  C: S.join('') + T.join('') + R.join('') + palatalised,
  S: S.join('') + palatalised,
  T: T.join('') + palatalised,
  R: R.join('') + palatalised,
  V: V.join(''),
  Vm: V.join('') + mods.join(''),
}

export {V, S, T, R, mods, palatalised, joined, glide, semi, long}
