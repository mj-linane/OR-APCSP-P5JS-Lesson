/**
 * It returns a capitalized version of the string.
 * @param {*} word
 */
function hello(word) {
  const wordPick = word;
  const wordFirstCap = wordPick.charAt(0).toUpperCase();
  const wordCap = wordFirstCap + wordPick.slice(1);
  console.log('wordCap:', wordCap);
};
hello('hey!');
