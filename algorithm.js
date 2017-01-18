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
    return quickSort(array,0,array.length-1)
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
exports.Algorithm = new Algorithm();