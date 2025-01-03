function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }