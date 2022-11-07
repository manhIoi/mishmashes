/**
 * index.js
 * Created by manhloi5501 on 2022/11/07.
 * Copyright © 2022 manhloi5501<manhloi0505@gmail.com>. All rights reserved.
 */

const SingleTonPromise = require('./src/SingletonPromise');
const parseSafe = require('./src/parseSafe');

const demo = () => {};
demo();

module.exports = {
    SingleTonPromise,
    parseSafe,
};
