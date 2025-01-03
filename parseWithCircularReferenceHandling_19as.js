function parseWithCircularReferenceHandling(json) {
    const cache = new Map();
    const result = JSON.parse(json, (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (value.hasOwnProperty('Circular')) {
                return cache.get(value.Circular);
            }