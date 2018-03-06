
module.exports = {
  isPalindrome: isPalindrome

};

function isPalindrome(candidate){
  candidate = candidate.toLowerCase().replace(/[^a-zA-Z]/g, '');
  if (candidate==='') {
    return false;
  }
  return (candidate.split('').reverse().join('') === candidate);
}




