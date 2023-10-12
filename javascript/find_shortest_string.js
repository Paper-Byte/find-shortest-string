function findShortestString(arr) {
  let short = arr[0];
  for (const curr of arr) {
    if (curr.length < short.length) {
      short = curr;
    }
  }
  return short;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log('=>', findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log('');

  console.log("Expecting: 'hi'");
  console.log('=>', findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log('');

  console.log("Expecting: 'lily'");
  console.log(
    '=>',
    findShortestString(['flower', 'juniper', 'lily', 'dadelion'])
  );

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
