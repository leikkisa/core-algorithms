import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){

  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })

  it('returns an object with all coin types (quarters, dimes, nickels, and pennies)', function(){
    const change = fibonacci({price: 100, amountGiven: 100})
    expect(change).to.be.an('object')
    expect(change).to.have.keys('quarters', 'dimes', 'nickels', 'pennies')
    expect(change).to.deep.equal({
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    })
  })

  it('returns fibonacci', function(){
    expect(fibonacci(10)).to.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  })

})
