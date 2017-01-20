var network = require('../').Network
var test = require('tape')


test('Network | MAC address test valid MAC', function (t) {
    t.deepEqual(network.isMACAddress("01-23-45-67-89-AB"), true);
    t.deepEqual(network.isMACAddress("A1-23-45-67-89-AB"), true);
    t.deepEqual(network.isMACAddress("A1-23-45-67-89-AB".toLowerCase()), true);

    t.end()
});

test('Network | MAC address test invalid MAC', function (t) {
    t.deepEqual(network.isMACAddress("12"), false);
    t.deepEqual(network.isMACAddress("12-34"), false);
    t.deepEqual(network.isMACAddress("12-34-56"), false);
    t.deepEqual(network.isMACAddress("12-34-56-78"), false);
    t.deepEqual(network.isMACAddress("12-34-56-78-90"), false);
    t.deepEqual(network.isMACAddress("1-23-45-67-89-AB"), false);
    t.deepEqual(network.isMACAddress("G1-23-45-67-89-AB"), false);
    t.deepEqual(network.isMACAddress("G1-23 -45-67-89-AB"), false);
    t.deepEqual(network.isMACAddress("123-23-45-67-89-AB"), false);
    t.deepEqual(network.isMACAddress("13-23-45-67-89-ABaa"), false);
    t.deepEqual(network.isMACAddress(null), false);
    t.deepEqual(network.isMACAddress(undefined), false);
    t.deepEqual(network.isMACAddress(""), false);
    t.deepEqual(network.isMACAddress(" "), false);

    t.end()
});

test('Network | IPV4 test valid IP', function (t) {
    t.deepEqual(network.isIPV4("1.1.1.1"), true);
    t.deepEqual(true, network.isIPV4("1.11.111.255"));
    t.deepEqual(true, network.isIPV4("111.1.1.255"));
    t.deepEqual(true, network.isIPV4("255.255.255.255"));

    t.end()
});

test('Network | IPV4 test invalid IP', function (t) {
    t.deepEqual(false, network.isIPV4(null));
    t.deepEqual(false, network.isIPV4(""));
    t.deepEqual(false, network.isIPV4(" "));
    t.deepEqual(false, network.isIPV4("1"));
    t.deepEqual(false, network.isIPV4(".0.0.0"));
    t.deepEqual(false, network.isIPV4("-1.0.0.0"));
    t.deepEqual(false, network.isIPV4("111.111.111.1111"));
    t.deepEqual(false, network.isIPV4("1.2.3.256"));
    t.deepEqual(false, network.isIPV4("1.2.3.25 "));
    t.deepEqual(false, network.isIPV4("0.0.0.0:10000"));

    t.end()
});

test('Network | IPV6 test valid IP', function (t) {

    t.deepEqual(true, network.isIPV6("2001:0db8:85a3:0000:0000:8a2e:0370:7334"));
    t.deepEqual(true, network.isIPV6("::"));
    t.deepEqual(true, network.isIPV6("::3212"));
    t.deepEqual(true, network.isIPV6("::32"));
    t.deepEqual(true, network.isIPV6("2001:db8:85a3:0:0:8a2e:370:7334"));
    t.deepEqual(true, network.isIPV6("2001:db8:85a3::8a2e:370:7334"));
    t.deepEqual(true, network.isIPV6("0:0:0:0:0:0:0:1"));
    t.deepEqual(true, network.isIPV6("2001:db8:85a3::8a2e:370:7334"));
    t.deepEqual(true, network.isIPV6("0:0:0:0:0:0:0:0"));
    t.deepEqual(true, network.isIPV6("::ffff:192.168.89.9"));
    t.deepEqual(true, network.isIPV6("::c0a8:5909"))
    t.deepEqual(true, network.isIPV6("::135.75.43.52"))
    t.deepEqual(true, network.isIPV6("fec0::/10", true))

    t.end()
});

test('Network | IPV6 test invalid IP', function (t) {
    t.deepEqual(false, network.isIPV6("2001:0gb8:85a3:0000:0000:8a2e:0370:7334"));
    t.deepEqual(false, network.isIPV6("2001:0gb8:85a3:0000:0000:8a2e:0370:73341"));
    t.deepEqual(false, network.isIPV6("2001:0gb8:85a3:0000:0000:8a2e:0370:73 4"));
    t.deepEqual(false, network.isIPV6("2001::85a3::0000:8a2e:0370:73 4"));
    t.deepEqual(false, network.isIPV6("2001:0db8:85a3:0000:0000:8a2e:0370:73334"));
    t.deepEqual(false, network.isIPV6("192.168.89.9"));

    t.end()
});

test('Network | Simplify IPV6', function (t) {
    t.deepEqual("2001:db8::1428:57ab", network.simplifyIPV6("2001:0db8:0000:0000:0000:0000:1428:57ab"));
    t.deepEqual("2001:db8:85a3::1319:8a2e:370:7344", network.simplifyIPV6("2001:0db8:85a3:0:1319:8a2e:0370:7344"));
    t.deepEqual(network.simplifyIPV6("2001:0db8:0000:0000:0000:ff00:0042:8329"), "2001:db8::ff00:42:8329");
    t.deepEqual(network.simplifyIPV6("0000:0000:0000:0000:0000:0000:0000:0001"), "::1");

    t.end()
});