function generateRandomPassword(length = 12, options = {}) {
    const defaultOptions = {
        includeUppercase: true,
        includeLowercase: true,
        includeNumbers: true,
        includeSymbols: true,
    }