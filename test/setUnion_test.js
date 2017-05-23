import { expect } from 'chai'
import setUnion from '../src/setUnion'

describe('setUnion()', function(){

  it('should be a function', function(){
    expect(setUnion).to.be.a('function')
  })

  it('returns union of two arrays', function(){
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    expect(setUnion(a, b)).to.eql([ 1, 2, 3, 4, 6, 8 ])
  })

  it('throws an error for invalid input', function(){
    expect(() => setUnion(3.14)).to.throw()
  })

})
