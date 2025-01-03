function sortByNestedProperty(arr, propertyPath) {
    const path = propertyPath.split('.');
    return arr.sort((a, b) => {
        let valueA = path.reduce((obj, key) => obj && obj[key], a);
        let valueB = path.reduce((obj, key) => obj && obj[key], b);

        if (valueA < valueB) return -1;
        if (valueA > valueB) return 1;
        return 0;
    }