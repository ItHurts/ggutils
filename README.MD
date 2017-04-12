# GG Utils [![NPM version](https://badge.fury.io/js/gg-utils.svg)](https://www.npmjs.com/package/gg-utils)

GG Utils collects utils for daily struggle

## Usage

```js
var gg = require('gg-utils');

console.log(gg.Network.isIPV4("172.19.30.21"));     // true
console.log(gg.Network.isIPV4("172.19.256.21"));    // false

var array = [6,3,7,2,4,0]
var sortedArray = gg.Algorithm.quickSort(array) 
console.log(sortedArray)    // [0,2,3,4,6,7]
```
## Installation

```sh
npm install gg-utils --save
```

## API Reference

### Algorithm
```js
var algorithm = require('gg-utils').Algorithm;
```

__bubbleSort(array)__

Sorts an array from the minimum to the maximum.

Reference: https://en.wikipedia.org/wiki/Bubble_sort


```js
var array = [3,7,1,2,5,8,12]
console.log(algorithm.bubbleSort(array))    // [1,2,3,5,7,8,12]
```

__cocktailShakerSort(array)__

Sorts an array from the minimum to the maximum.

Reference: https://en.wikipedia.org/wiki/Cocktail_shaker_sort


```js
var array = [3,7,1,2,5,8,12]
console.log(algorithm.cocktailShakerSort(array))    // [1,2,3,5,7,8,12]
```

__combSort(array)__

Sorts an array from the minimum to the maximum.

Reference: https://en.wikipedia.org/wiki/Comb_sort


```js
var array = [3,7,1,2,5,8,12]
console.log(algorithm.combSort(array))  //[1,2,3,5,7,8,12]
```

__fibonacciNumber(n)__

 Returns the nth fibonacci number.

 Reference: https://en.wikipedia.org/wiki/Fibonacci_number

```js
console.log(algorithm.fibonacciNumber(20))  // 6765
console.log(algorithm.fibonacciNumber(40))  // 102334155
```

__fibonacciNumberRecursive(n)__

 Returns the nth fibonacci number using the recursive algorithm (slower than the iterative).

 Reference: https://en.wikipedia.org/wiki/Fibonacci_number

```js
console.log(algorithm.fibonacciNumberRecursive(20)) //6765
console.log(algorithm.fibonacciNumberRecursive(40)) //102334155
```

__gnomeSort(array)__

Sorts an array from the minimum to the maximum.

Reference: https://en.wikipedia.org/wiki/Gnome_sort

```js
var array = [6,3,7,2,4,0]
console.log(algorithm.gnomeSort(array)) // [0,2,3,4,6,7]
```

__quickSort(array)__

Sorts an array from the minimum to the maximum.

Reference: https://en.wikipedia.org/wiki/Quicksort

```js
var array = [6,3,7,2,4,0]
console.log(algorithm.quickSort(array)) // [0,2,3,4,6,7]
```
__sieveOfEratosthenes(n)__

Produces an array with all primes not greater than n.

Reference: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
```js
console.log(algorithm.quickSort(10))    // [0,1,2,3,5,7]
console.log(algorithm.quickSort(30))    // [0,1,2,3,5,7,11,13,17,19,23,29]
console.log(algorithm.quickSort(1))     // false
```

__trialDivision(n)__

Produces an array with prime factors of n.

Reference: https://en.wikipedia.org/wiki/Trial_division
```js
console.log(algorithm.trialDivision(12))    // [2,2,3]
console.log(algorithm.trialDivision(17))    // [17]
console.log(algorithm.trialDivision(784))   // [2,2,2,2,7,7]
```

### Date
```js
var date = require('gg-utils').Date;
```

__isLeapYear(year)__

Checks if year is a leap year.

Reference: https://en.wikipedia.org/wiki/Leap_year

```js
console.log(date.isLeapYear(2012))   //true
console.log(date.isLeapYear(2013))   //false
console.log(date.isLeapYear(2016))   //true
console.log(date.isLeapYear(2017))   //false
```

__timeDiff(from, to[,timezone])__

Returns an object with the fields: days, hours, minutes and seconds of the time difference between from and to
```js
console.log(date.timeDiff(new Date(2015, 5, 1, 22, 14, 7),new Date(2018, 8, 17, 15, 8, 32))) // {days: 1203, hours: 16, minutes: 54,seconds: 25}
console.log(date.timeDiff(new Date(2015, 1, 1, 22, 14, 7),new Date(2018, 8, 17, 15, 8, 32), true)) //{days: 1323, hours: 15, minutes: 54, seconds: 25}
```

### Network

```js
var network = require('gg-utils').Network;
```

__isMACAddress(MAC)__

Checks if the string provided is a valid MAC address.

```js
console.log(network.isMACAddress("01-23-45-67-89-AB"))  //true
console.log(network.isMACAddress("G1-23-45-67-89-AB"))  //false
```

__isIPV4(IPV4)__

Checks if the string provided is a valid IPV4.

```js
console.log(network.isIPV4("172.19.2.4"))       // true
console.log(network.isIPV4("192.168.4.256"))    // false
```

__isIPV6(IPV6[,specialCheck])__

Checks if the string provided is a valid IPV6.
If specialCheck is true (default is false), the following IPV6 address will be treated as valid:
* ::/128
* ::1/128
* ::/96
* ::ffff:0:0/96
* fe80::/10
* fec0::/10
* fc00::/7
* ff00::/8"

```js
console.log(network.isIPV6("2001:0db8:85a3:0000:0000:8a2e:0370:7334"))  // true
console.log(network.isIPV6("2001:db8:85a3:0:0:8a2e:370:7334"))          // true
console.log(network.isIPV6("::ffff:192.168.89.9"))                      // true
console.log(network.isIPV6("fec0::/10", true))                          // true
console.log(network.isIPV6("2001:0gb8:85a3:0000:0000:8a2e:0370:7334"))  // false
console.log(network.isIPV6("192.168.89.9"))                             // false
```

__simplifyIPV6(IPV6)__

Simpliefies a valid IPV6.

```js
console.log(network.simplifyIPV6("2001:0db8:0000:0000:0000:0000:1428:57ab"))    // 2001:db8::1428:57ab
console.log(network.simplifyIPV6("2001:0db8:85a3:0:1319:8a2e:0370:7344"))       // 2001:db8:85a3::1319:8a2e:370:7344
console.log(network.simplifyIPV6("0000:0000:0000:0000:0000:0000:0000:0001"))    // ::1
console.log(network.simplifyIPV6("2001:0gb8:85a3:0000:0000:8a2e:0370:7334"))    // false
```

### Random
```js
var random = require('gg-utils').Random;
```
__arrayGeneratorInt(min,max,n)__

Returns a random array of integers. 
* min is minimum value
* max is the maximum value
* n is the size of the array (limit 10000000)

```js
console.log(random.arrayGeneratorInt(0,10,5))           // [3,5,8,0,1]
console.log(random.arrayGeneratorInt(-30,30,10))        // [-29,-27,-28,13,-29,10,14,7,13,-5]
console.log(random.arrayGeneratorInt(30,29,10))         // false
console.log(random.arrayGeneratorInt(-30,30,10000001))  // false
```

__getRandomIntInclusive(min,max)__

Returns a random integer between min and max (both inclusive)

```js
console.log(random.arrayGeneratorInt(0,10))     // 4
console.log(random.arrayGeneratorInt(0,10))     // 10
console.log(random.arrayGeneratorInt(-10,10))   // -8
console.log(random.arrayGeneratorInt(10,9))     // false
```

__getRandomString(n)__
 
  Returns a random string with length n. Available chars are [a-zA-Z0-9].
  
  ```js
console.log(random.getRandomString(10)) // 2jIPIcUMCv
console.log(random.getRandomString(4))  // 65Bi
console.log(random.getRandomString(0))  // ""
console.log(random.getRandomString(-1)) // ""
```

    
## License

MIT