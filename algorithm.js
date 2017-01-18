var Algorithm = function () {};

/**
 * Sort an array from lowest to the highest value
 * 
 * @param {Array} array Array to sort
 * @param {number} lo First position of the array, generally 0
 * @param {number} hi Last position of the array
 * @returns {Array} Returns the sorted array
 */
Algorithm.prototype.quickSort = function (array) {
    return quickSort(array, 0, array.length - 1)
}

function quickSort(array, lo, hi) {
    if (!array) return []
    if (lo < hi) {
        var p = partion(array, lo, hi);
        quickSort(array, lo, p - 1);
        quickSort(array, p + 1, hi);
    }
    return array
}

function partion(array, lo, hi) {
    var pivot = array[hi]
    var i = lo;
    for (var j = lo; j < hi; j++) {
        if (array[j] <= pivot) {
            var temp = array[i]
            array[i] = array[j]
            array[j] = temp;
            i++
        }
    }
    var temp = array[i]
    array[i] = array[hi]
    array[hi] = temp;
    return i;
}

/**
 * Produces an array with all primes not greater than n
 * @param {number} n Maximum possible prime (providing 10, the greatest prime number is 7)
 * @return {Array|boolean}
 */
Algorithm.prototype.sieveOfEratosthenes = function (n) {
    if (n > 1) {
        var support = []
        for (var i = 0; i < n; i++) support.push(true)
        for (var i = 2; i < Math.sqrt(n); i++) {
            if (support[i]) {
                var j = 0;
                var k = 1;
                while (j < n) {
                    if (j == 0) {
                        j = Math.pow(i, 2)
                        support[j] = false
                    }
                    j = Math.pow(i, 2) + k * i
                    if (j < n) {
                        support[j] = false
                        k++
                    }
                }
            }
        }
        var primes = []
        for (var i = 0; i < n; i++)
            if (support[i]) primes.push(i)
        return primes
    } else return false
}



exports.Algorithm = new Algorithm();