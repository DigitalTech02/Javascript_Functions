function highlightSearchTerms(text, searchTerms) {
    if (!searchTerms || searchTerms.length === 0) return text;

    const regex = new RegExp(`(${searchTerms.join('|')}