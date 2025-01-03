function debounceResize(callback, delay) {
    let timeoutId;
    window.addEventListener('resize', () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback();
        }