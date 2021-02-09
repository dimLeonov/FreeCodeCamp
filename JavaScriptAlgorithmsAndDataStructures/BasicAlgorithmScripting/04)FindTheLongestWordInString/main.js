function findLongestWordLength(str) {

    const reducer = (accumulator, currentValue) => Math.max(accumulator,currentValue.length);

    let max = str.split(' ').reduce(reducer,0);
    return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");