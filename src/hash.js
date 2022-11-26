const hash = (value, key) => {
    try {
        if (!key) return {};
        if (Array.isArray(value)) {
            return value.reduce((prev, current, i) => {
                const keyValue = current[key] || i;
                return Object.assign(prev, { [keyValue]: current });
            }, {});
        }
        return {};
    } catch (error) {
        console.log('[error hash]', error);
        return {};
    }
};

module.exports = hash;
