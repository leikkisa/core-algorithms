import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome()', function(){

  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  it('Return true for palindrome', function(){
    expect(isPalindrome('radar')).to.equal(true)
  })

  it('Return false for not palindrome', function(){
    expect(isPalindrome('bananas')).to.equal(false)
  })

  it('Return true for palindrome with spaces and punctuation', function(){
    expect(isPalindrome('A man, a plan, a canal: Panama')).to.equal(true)
  })

})
