function objectToQueryString(obj) {
    return '?' + Object.entries(obj)
        .map(([key, value]) => `${encodeURIComponent(key)}