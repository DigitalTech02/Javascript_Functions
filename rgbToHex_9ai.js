function rgbToHex(r, g, b) {
    // Ensure the values are within the 0-255 range
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    // Convert to hexadecimal and pad with zeros if necessary
    const hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    return `#${hex}