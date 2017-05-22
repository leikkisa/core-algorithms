import { expect } from 'chai'
import collatzConjecture from '../src/collatzConjecture'

describe('collatzConjecture()', function(){

  it('should be a function', function(){
    expect(collatzConjecture).to.be.a('function')
  })

  it('returns collatz conjecture', function(){
    expect(collatzConjecture(7)).to.equal([7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1])
  })

  it('returns collatz conjecture of 1', function(){
    expect(collatzConjecture(1)).to.equal([1])
  })

})
