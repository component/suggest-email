
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

  describe('when only @ is present', function(){
    it('should return ""', function(){
      suggest('tobi@').should.equal('');
    })
  })

  describe('when @ is present', function(){
    it('should return suggestions', function(){
      suggest('tobi@g').should.equal('mail.com');
      suggest('tobi@gm').should.equal('ail.com');
      suggest('tobi@gma').should.equal('il.com');
      suggest('tobi@gmal').should.equal('');

      suggest('tobi@h').should.equal('otmail.com');
      suggest('tobi@hotma').should.equal('il.com');
      suggest('tobi@hotmail.').should.equal('com');
      suggest('tobi@hotmail.c').should.equal('om');
      suggest('tobi@hotmail.com').should.equal('');
      suggest('tobi@hotmail.co').should.equal('m');
      suggest('tobi@hotmail.co.').should.equal('uk');
    })
  })
})