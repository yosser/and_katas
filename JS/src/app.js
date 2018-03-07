
module.exports = {
  isPalindrome: isPalindrome

};

function isPalindrome(palindrome){
  sanitised = palindrome.toLowerCase().replace(/[^a-z0-9A-Z]/g, '');
  if (sanitised === '') {
    return false;
  }
  return Array.from(sanitised).every((ch,idx) => sanitised[sanitised.length - 1 - idx] === ch);
}




