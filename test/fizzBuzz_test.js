import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', function(){

  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })

  let result = fizzBuzz()
  it('Expect 3rd element to be Fizz', function(){
    expect(result[2]).to.equal('Fizz')
  })

  it('Expect 5th element to be Buzz', function(){
    expect(result[4]).to.equal('Buzz')
  })

  it('Expect 15th element to be FizzBuzz', function(){
    expect(result[14]).to.equal('FizzBuzz')
  })

  it('Expect length to be 100', function(){
    expect(result.length).to.equal(100)
  })
})
