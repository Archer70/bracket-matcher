import { describe, it } from 'mocha'
import { expect } from 'chai'

import matcher from '../src'

describe('bracket-matcher', function () {
  it('Is true if there are no brackets in the string.', function () {
    expect(matcher('')).to.be.true
  })

  it('Passes if parens are in order. ()', function () {
    expect(matcher('()')).to.be.true
  })

  it('Fails if parens are out of order.', function () {
    expect(matcher(')(')).to.be.false
  })

  it('Works with multiple parens.', function () {
    expect(matcher('(())')).to.be.true
  })

  it('Passes with square brackets.', function () {
    expect(matcher('[]')).to.be.true
  })

  it('Passes with a mix of square brackets and parens.', function () {
    expect(matcher('([])')).to.be.true
  })

  it('Passes with two nested sets.', function () {
    expect(matcher('( [] [] )')).to.be.true
  })

  it('Passes with more than one root set.', function () {
    expect(matcher('() ()')).to.be.true
  })

  it('Passes with nested sets in multiple root sets.', function () {
    expect(matcher('{ () [] } [ {} ([]) ]')).to.be.true
  })

  it('Fails if one of the nested sets are out of order.', function () {
    expect(matcher('{ () [] } [ {} (][) ]')).to.be.false
  })

  it('Works with a sentence.', function () {
    expect(matcher(
      'This is an example (test) sentence with sets of brackets [(), {}, ()].'
    )).to.be.true
  })
})
