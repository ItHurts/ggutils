var date = require('../dist').Date
var test = require('tape')


test('Date | Is leap Year', function (t) {
    t.deepEqual(date.isLeapYear(1804),true);
    t.deepEqual(date.isLeapYear(1920),true);
    t.deepEqual(date.isLeapYear(2020),true);
    t.deepEqual(date.isLeapYear(2264),true);

    t.end()
});

test('Date | Is not leap Year', function (t) {
    t.deepEqual(date.isLeapYear(1900),false);
    t.deepEqual(date.isLeapYear(2010),false);
    t.deepEqual(date.isLeapYear(2235),false);
    t.deepEqual(date.isLeapYear(2154),false);

    t.end()
});
