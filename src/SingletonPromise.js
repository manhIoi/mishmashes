let promises = {};

const goPromise = (key, executor) => {
    if (!promises[key]) {
        promises[key] = new Promise(executor);
        promises[key]
            .catch(() => null)
            .finally(() => {
                delete promises[key];
            });
    }
    return promises[key];
};

const getPromises = (key) => {
    return promises;
};

const clearPromise = (key) => {
    if (promises[key]) {
        delete promises[key];
    }
};

const clearAllPromise = () => {
    promises = {};
};

module.exports = {
    goPromise,
    getPromises,
    clearPromise,
    clearAllPromise,
};
