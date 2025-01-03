function arrayDifference(A, B) {
    return A.filter(item => !B.includes(item));
}