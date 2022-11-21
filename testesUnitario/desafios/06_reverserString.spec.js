const reverseString = require('./05_reverserString')

it('reverse', () =>
    expect(reverseString('teste')).toBe('etset')
)

it('reverses multiple words',() =>
  expect(reverseString('hello World')).toBe('dlroW olleh')
)

it ('works with numbers and punctuation', () =>{
  expect(reverseString('123! abc!')).toBe('!cba !321')
})

it('works with blank strings',() => {
  expect(reverseString('')).toBe('')
} )
