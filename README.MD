# GG Utils

GG Utils collects utils for daily struggle

## Usage

```js
var gg = require('ggutils');

gg.Newtork.isIPV4("172.19.30.21")); // true
gg.Newtork.isIPV4("172.19.256.21")); // false

var array = [6,3,7,2,4,0]
var sortedArray = gg.Algorithm.quickSort(array) //sortedArray [0,2,3,4,6,7]
```
## Installation

```sh
npm install ggutils --save
```

## API Reference

### Algorithm
```js
var algorithm = require('ggutils').Algorithm;
```
__quickSort(Array)__
Sort an array from the minimum to the maximum

```js
var array = [6,3,7,2,4,0]
var sortedArray = algorithm.quickSort(array) //sortedArray [0,2,3,4,6,7]
```

### Network

```js
var network = require('ggutils').Network;
```

__isIPV4(IPV4)__
Checks if the string provided is a valid IPV4

```js
network.isIPV4("172.19.2.4") //true
network.isIPV4("192.168.4.256") //false
```

__isIPV6(IPV6, specialCheck = false)__
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
network.isIPV6("2001:0db8:85a3:0000:0000:8a2e:0370:7334") //true
network.isIPV6("2001:db8:85a3:0:0:8a2e:370:7334") //true
network.isIPV6("::ffff:192.168.89.9") //true
network.isIPV6("fec0::/10", true) //true

network.isIPV6("2001:0gb8:85a3:0000:0000:8a2e:0370:7334") //false
network.isIPV6("192.168.89.9") //false
```

__simplifyIPV6(IPV6)__
Simpliefies a valid IPV6.

```js
network.simplifyIPV6("2001:0db8:0000:0000:0000:0000:1428:57ab") //2001:db8::1428:57ab
network.simplifyIPV6("2001:0db8:85a3:0:1319:8a2e:0370:7344") //2001:db8:85a3::1319:8a2e:370:7344
network.simplifyIPV6("0000:0000:0000:0000:0000:0000:0000:0001") //::1e

network.simplifyIPV6("2001:0gb8:85a3:0000:0000:8a2e:0370:7334") //false
```

### Random
```js
var random = require('ggutils').Random;
```
__arrayGeneratorInt(min,max,n)__
Returns a random array of integers. 
* min is minimum value
* max is the maximum value
* n is the size of the array (limit 10000000)

```js
random.arrayGeneratorInt(0,10,5) //[3,5,8,0,1]
random.arrayGeneratorInt(-30,30,10) //[-29,-27,-28,13,-29,10,14,7,13,-5]
random.arrayGeneratorInt(30,29,10) //false
random.arrayGeneratorInt(-30,30,10000001) //false
```

__getRandomIntInclusive(min,max)__
Returns a random integer between min and max (both inclusive)
```js
random.arrayGeneratorInt(0,10) //4
random.arrayGeneratorInt(0,10) //10
random.arrayGeneratorInt(-10,10) //-8
random.arrayGeneratorInt(10,9) //false
```
    
## License

MIT