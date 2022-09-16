const valid = require("semver/functions/valid");

/**
 * isSemver
 * Checks if the input value is a valid semver version.
 *
 * @name isSemver
 * @function
 * @param {String} input The input value.
 * @return {Boolean} Returns `true` if the input is a valid semver version or `false` otherwise.
 */
module.exports = function isSemver (input) {
    return valid(input) !== null;
};
