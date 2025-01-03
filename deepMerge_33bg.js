function deepMerge(target, source) {
    if (Array.isArray(target) && Array.isArray(source)) {
        return [...target, ...source.map(item => deepMerge([], item))];
    }