function debounceThrottle(func, wait, immediate) {
    let timeout;
    let lastCallTime;
    let context;
    let args;

    const later = () => {
        const now = Date.now();
        const elapsed = now - lastCallTime;

        if (elapsed < wait) {
            timeout = setTimeout(later, wait - elapsed);
        }