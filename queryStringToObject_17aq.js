function queryStringToObject(queryString) {
    return queryString
        .slice(1) // Remove the leading '?'
        .split('&')
        .reduce((acc, curr) => {
            const [key, value] = curr.split('=');
            acc[decodeURIComponent(key)] = decodeURIComponent(value || '');
            return acc;
        }