export default function (input) {
  const chars = input.split('')
  const openers = []
  let expectedCloser

  for (const char of chars) {
    if (validOpener(char)) {
      openers.push(char)
      expectedCloser = closerFor(char)
    } else if (validCloser(char) && char === expectedCloser) {
      openers.pop()
      expectedCloser = closerFor(lastOpener(openers))
    }
  }

  return openers.length === 0
}

function validOpener (char) {
  return ['(', '[', '{'].includes(char)
}

function validCloser (char) {
  return [')', ']', '}'].includes(char)
}

function closerFor (char) {
  return {
    '(': ')',
    '[': ']',
    '{': '}'
  }[char]
}

function lastOpener (openers) {
  return openers[openers.length - 1]
}
