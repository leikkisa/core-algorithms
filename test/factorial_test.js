import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', function(){

  it('should be a function', function(){
    expect(factorial).to.be.a('function')
  })

  it('Return factorial of a number',
    expect(factorial(5)).to.equal(120)
  })

  it('factorial of zero',
    expect(factorial(0)).to.equal(0)
  })

  it('factorial of 10',
    expect(factorial(0)).to.equal(3628800)
  })

})
