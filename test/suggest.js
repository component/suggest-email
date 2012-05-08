
var suggest = require('../');

describe('suggest.domains', function(){
  it('should be exposed', function(){
    suggest.domains.should.be.an.instanceof(Array);
  })
})

describe('suggest(email)', function(){
  describe('when @ is not yet present', function(){
    it('should return ""', function(){
      suggest('').should.equal('');
      suggest('hey').should.equal('');
      suggest('hey-there').should.equal('');
    })
  })
})