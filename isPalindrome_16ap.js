function isPalindrome(str) {
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const len = normalizedStr.length;
    for (let i = 0; i < len / 2; i++) {
        if (normalizedStr[i] !== normalizedStr[len - 1 - i]) {
            return false;
        }