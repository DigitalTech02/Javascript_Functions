function generateSlug(string) {
    // Convert to lowercase
    let slug = string.toLowerCase();
    // Remove special characters and replace spaces with hyphens
    slug = slug.replace(/[^a-z0-9\s-]/g, '')
               .trim()
               .replace(/\s+/g, '-')
               .replace(/--+/g, '-');
    
    return slug;
}