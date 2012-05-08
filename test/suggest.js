
var suggest = require('../');

describe('suggest(email)', function(){
  describe('when @ is not yet present', function(){
    it('should return ""', function(){
      suggest('').should.equal('');
      suggest('hey').should.equal('');
      suggest('hey-there').should.equal('');
    })
  })
})