
/**
 * Expose `suggest()`.
 */

exports = module.exports = suggest;

/**
 * Suggest an email domain based on the given `str`
 * or "" when no match is found.
 *
 * @param {String} str
 * @return {String}
 * @api public
 */

function suggest(str){
  str = str.split('@')[1];
  if (!str) return '';

  var match = exports.domains.filter(function(domain){
    return 0 == domain.indexOf(str);
  }).shift() || '';

  return match.replace(str, '');
}

/**
 * Domains.
 */

exports.domains = [
  'yahoo.com',
  'gmail.com',
  'google.com',
  'hotmail.com',
  'me.com',
  'aol.com',
  'mac.com',
  'live.com',
  'comcast.com',
  'googlemail.com',
  'msn.com',
  'hotmail.co.uk',
  'yahoo.co.uk',
  'facebook.com',
  'verizon.net',
  'att.net',
  'gmz.com',
  'mail.com',
];