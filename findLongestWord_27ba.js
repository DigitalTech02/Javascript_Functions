function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }