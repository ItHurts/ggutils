class Algorithm {
    /**
     * Sort an array from lowest to the highest value
     * 
     * @param   {Array} array Array to sort
     * @return  {Array} Returns the sorted array
     */
    public bubbleSort(array) {
        let n = array.length;
        while (n > 0) {
            let newn = 0;
            for (let i = 1; i < n; i++) {
                if (array[i - 1] > array[i]) {
                    let temp = array[i - 1];
                    array[i - 1] = array[i];
                    array[i] = temp;
                    newn = i;
                }
            }
            n = newn;
        }
        return array;
    }

    /**
     * Sort an array from lowest to the highest value
     * 
     * @param   {Array} array Array to sort
     * @return  {Array} Returns the sorted array
     */
    public cocktailShakerSort(array) {
        let swapped = false;
        do {
            for (let i = 0; i < array.length; i++) {
                if (array[i] > array[i + 1]) {
                    let temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) break;
            swapped = true;
            for (let i = array.length - 1; i >= 0; i--) {
                if (array[i] > array[i + 1]) {
                    let temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                    swapped = true;
                }
            }
        }
        while (swapped);
        return array;
    }

    /**
     * Sort an array from lowest to the highest value
     * 
     * @param   {Array} array Array to sort
     * @return  {Array} Returns the sorted array
     */
    public combSort(array) {
        let gap = array.length;
        let shrink = 1.3;
        let sorted = false;
        while (!sorted) {
            gap = Math.floor(gap / shrink);
            if (gap > 1) sorted = false;
            else {
                gap = 1;
                sorted = true;
            }
            let i = 0;
            while (i + gap < array.length) {
                if (array[i] > array[i + gap]) {
                    let temp = array[i];
                    array[i] = array[i + gap];
                    array[i + gap] = temp;
                }
                i++;
            }
        }
        return array;
    }

    /**
     * Returns the nth fibonacci number
     * 
     * @param   {number} n Length of the sequence
     * @return  {Array}
     */
    public fibonacciNumber(n) {
        let a = 1,
            b = 1;
        for (let i = 0; i < n - 2; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }

    public fibonacciNumberRecursive(n) {
        if (n <= 2) return 1;
        else return this.fibonacciNumberRecursive(n - 1) + this.fibonacciNumberRecursive(n - 2);
    }

    /**
     * Sort an array from lowest to the highest value
     * 
     * @param   {Array} array Array to sort
     * @return  {Array} Returns the sorted array
     */
    public gnomeSort(array) {
        let i = 0;
        while (i < array.length) {
            if (i === 0 || array[i] >= array[i - 1]) {
                i++;
            } else {
                let temp = array[i];
                array[i] = array[i - 1];
                array[i - 1] = temp;
                i--;
            }
        }
        return array;
    }
    /**
     * Sort an array from lowest to the highest value
     * 
     * @param   {Array} array Array to sort
     * @return  {Array} Returns the sorted array
     */
    public quickSort(array) {
        return this._quickSort(array, 0, array.length - 1);
    }

    /**
     * Sort an array from lowest to the highest value
     * 
     * @param   {Array}     array Array to sort
     * @param   {number}    lo First position of the array, generally 0
     * @param   {number}    hi Last position of the array
     * @return  {Array}     Returns the sorted array
     */
    private _quickSort(array, lo, hi) {
        if (!array) return [];
        if (lo < hi) {
            let p = this.partion(array, lo, hi);
            this._quickSort(array, lo, p - 1);
            this._quickSort(array, p + 1, hi);
        }
        return array;
    }

    private partion(array, lo, hi) {
        let pivot = array[hi];
        let i = lo;
        for (let j = lo; j < hi; j++) {
            if (array[j] <= pivot) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                i++;
            }
        }
        let temp = array[i];
        array[i] = array[hi];
        array[hi] = temp;
        return i;
    }

    /**
     * Produces an array with all primes not greater than n
     * 
     * @param   {number}        n Maximum possible prime (providing 10, the greatest prime number is 7)
     * @return  {Array|boolean}
     */
    public sieveOfEratosthenes(n) {
        if (n > 1) {
            let support = [];
            for (let i = 0; i < n; i++) support.push(true);
            for (let i = 2; i < Math.sqrt(n); i++) {
                if (support[i]) {
                    let j = 0;
                    let k = 1;
                    while (j < n) {
                        if (j === 0) {
                            j = Math.pow(i, 2);
                            support[j] = false;
                        }
                        j = Math.pow(i, 2) + k * i;
                        if (j < n) {
                            support[j] = false;
                            k++;
                        }
                    }
                }
            }
            let primes = [];
            for (let i = 2; i < n; i++)
                if (support[i]) primes.push(i);
            return primes;
        } else [];
    }

    /**
     * Produces an array with prime factors of n
     * 
     * @param   {number} n
     * @return  {Array}
     */
    public trialDivision(n) {
        if (n < 2) return [];
        let primeFactors = [];
        for (let p of this.sieveOfEratosthenes(Math.round(Math.pow(n, 0.5)))) {
            if (p * p > n) return;
            while (n % p === 0) {
                primeFactors.push(p);
                n = n / p;
            }
        }
        if (n > 1) primeFactors.push(n);
        return primeFactors;
    }
}

let algorithm = new Algorithm();

export {
    algorithm as Algorithm
}