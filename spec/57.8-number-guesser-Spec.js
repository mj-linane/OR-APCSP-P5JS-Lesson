/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
describe('UnitTests', function() {
  it('increases score', function() {
    expect(increaseScore(10).toEqual(10))
  })

  it('decrease score', function() {
    expect(decreaseScore(1).toEqual(-1))
  })
})
