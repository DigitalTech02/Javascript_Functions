function getCombinations(arr) {
    const result = [];

    const helper = (start, combination) => {
        result.push([...combination]);
        for (let i = start; i < arr.length; i++) {
            combination.push(arr[i]);
            helper(i + 1, combination);
            combination.pop();
        }