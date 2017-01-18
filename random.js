var Random = function () {};

const SIZE_LIMIT = 10000000;

/**
 * Returns a random array of integers
 * 
 * @param {number} min Minimum value 
 * @param {number} max Maximum value
 * @param {number} n Size of the array
 * @return {Array} 
 */
Random.prototype.arrayGeneratorInt = function (min, max, n) {
    if (n > SIZE_LIMIT) return false
    if (min > max) return false
    var array = []
    for (var i = 0; i < n; i++) array.push(this.getRandomIntInclusive(min, max))
    return array
}

/**
 * Returns a random integer between min and max
 * @private
 * @param {number} min Minimum value 
 * @param {number} max Maximum value
 * @returns {number|boolean} 
 */
Random.prototype.getRandomIntInclusive = function (min, max) {
    if (min > max) return false
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.Random = new Random();