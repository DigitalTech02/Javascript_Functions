function throttle(func, limit) {
    let lastFunc;
    let lastRan;

    return function() {
        const context = this;
        const args = arguments;

        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        }