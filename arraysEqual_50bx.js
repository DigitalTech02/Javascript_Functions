function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    const sortedArr1 = arr1.slice().sort();
    const sortedArr2 = arr2.slice().sort();

    return sortedArr1.every((value, index) => value === sortedArr2[index]);
}