// This one is faster with smaller arrays
function findLongestWord(strs) {
    let word = ""
    for (let i = 0; i < strs.length; i++) {
        if (word.length < strs[i].length) {
            word = arr[i]
        }
    }
    return word
}

// This one is faster with bigger arrays due to how reduce works under the hood, and it looks nicer
function findLongestWordReduce(strs) {
    return strs.reduce((a,b) => a.length < b.length ? b : a, "");
}
// Runtime: O(n) for both, we don't know the input size