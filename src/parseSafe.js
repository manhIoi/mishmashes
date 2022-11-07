const parseSafe = (value) => {
    let result = null;
    if (value) {
        if (typeof value === 'object') return value;
        try {
            result = JSON.parse(value);
        } catch (error) {
            console.log('[ERROR]: parse error', error);
        }
    }
    return result;
};

module.exports = parseSafe;
