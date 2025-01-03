function helper(o1, o2, res) {
        for (const key in o1) {
            if (o1.hasOwnProperty(key)) {
                if (typeof o1[key] === 'object' && o1[key] !== null) {
                    if (!(key in o2)) {
                        res[key] = o1[key];
                    }