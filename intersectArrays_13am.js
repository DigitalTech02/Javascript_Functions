function intersectArrays(...arrays) {
    return arrays.reduce((acc, arr) => acc.filter(item => arr.includes(item)));
}