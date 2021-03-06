import { expect } from 'chai'
import setComplement from '../src/setComplement'

describe('setComplement()', function(){

  it('should be a function', function(){
    expect(setComplement).to.be.a('function')
  })

  it('returns complement of two arrays', function(){
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    expect(setComplement(a, b)).to.eql([6, 8])
  })

  it('throws an error for invalid input', function(){
    expect(() => setComplement(3.14)).to.throw()
  })

})
