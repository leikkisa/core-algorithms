import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){

  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })

  it('returns fibonacci', function(){
    expect(fibonacci(10)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  })

  it('throws an error for invalid input', function(){
    expect(() => fibonacci(3.14)).to.throw()
  })

})
