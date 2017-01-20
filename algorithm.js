var Algorithm = function () {};

/**
 * Sort an array from lowest to the highest value
 * 
 * @param {Array} array Array to sort
 * @return {Array} Returns the sorted array
 */
Algorithm.prototype.bubbleSort = function (array) {
    var n = array.length
    while (n > 0) {
        var newn = 0;
        for (var i = 1; i < n; i++) {
            if (array[i - 1] > array[i]) {
                var support = array[i - 1]
                array[i - 1] = array[i]
                array[i] = support
                newn = i
            }
        }
        n = newn
    }
    return array
}

/**
 * Sort an array from lowest to the highest value
 * 
 * @param {Array} array Array to sort
 * @return {Array} Returns the sorted array
 */
Algorithm.prototype.cocktailShakerSort = function (array) {
    do {
        var swapped = false
        for (var i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                var support = array[i]
                array[i] = array[i + 1]
                array[i + 1] = support
                swapped = true
            }
        }
        if (!swapped) break
        swapped = true
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i] > array[i + 1]) {
                var support = array[i]
                array[i] = array[i + 1]
                array[i + 1] = support
                swapped = true
            }
        }
    }
    while (swapped)
    return array
}

/**
 * Sort an array from lowest to the highest value
 * 
 * @param {Array} array Array to sort
 * @return {Array} Returns the sorted array
 */
Algorithm.prototype.combSort = function (array) {
    var gap = array.length
    var shrink = 1.3
    var sorted = false
    while (!sorted) {
        gap = Math.floor(gap / shrink)
        if (gap > 1) sorted = false
        else {
            gap = 1;
            sorted = true
        }
        var i = 0;
        while (i + gap < array.length) {
            if (array[i] > array[i + gap]) {
                var support = array[i]
                array[i] = array[i + gap]
                array[i + gap] = support
            }
            i++;
        }
    }
    return array
}

/**
 * Returns the nth fibonacci number
 * 
 * @param {number} n Length of the sequence
 * @return {Array}
 */
Algorithm.prototype.fibonacciNumber = function (n) {
    var a = 1,
        b = 1
    for (var i = 0; i < n - 2; i++) {
        var c = a + b;
        a = b;
        b = c
    }
    return b
}

Algorithm.prototype.fibonacciNumberRecursive = function (n) {
    if (n <= 2) return 1;
    else return this.fibonacciNumberRecursive(n - 1) + this.fibonacciNumberRecursive(n - 2)
}

/**
 * Sort an array from lowest to the highest value
 * 
 * @param {Array} array Array to sort
 * @return {Array} Returns the sorted array
 */
Algorithm.prototype.quickSort = function (array) {
    return quickSort(array, 0, array.length - 1)
}

/**
 * Sort an array from lowest to the highest value
 * 
 * @param {Array} array Array to sort
 * @param {number} lo First position of the array, generally 0
 * @param {number} hi Last position of the array
 * @return {Array} Returns the sorted array
 */
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
 * 
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
        for (var i = 2; i < n; i++)
            if (support[i]) primes.push(i)
        return primes
    } else return false
}

/**
 * Produces an array with prime factors of n
 * 
 * @param {number} n
 * @return {Array}
 */
Algorithm.prototype.trialDivision = function (n) {
    if (n < 2) return []
    var primeFactors = []
    this.sieveOfEratosthenes(Math.round(Math.pow(n, 0.5))).forEach(function (p) {
        if (p * p > n) return
        while (n % p == 0) {
            primeFactors.push(p);
            n = n / p
        }

    });
    if (n > 1) primeFactors.push(n);
    return primeFactors
}


exports.Algorithm = new Algorithm();