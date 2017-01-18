var Network = function () {};

/**
 * Checks if the string provided is a valid IPV4
 * 
 * @param {string} IPV4 The address to validate
 * @returns {boolean} Returns true if the address is valid, false otherwise
 */
Network.prototype.isIPV4 = function (IPV4) {
    if (IPV4 === null || IPV4.split(".").length - 1 != 3 || IPV4.split(" ").length - 1 > 0) return false
    else {
        var isValid = true;
        for (let sub of IPV4.split("."))
            if (sub.length > 3 || sub.length < 1 || Number(sub) > 255 || Number(sub) < 0 || isNaN(Number(sub))) isValid = false;
        return isValid;
    }
}

/**
 * Checks if the string provided is a valid IPV6
 * 
 * @param {string} IPV6 The address to validate
 * @param {boolean} [specialCheck=false] - Enable the check for special addresses
 * @returns {boolean} True if the address is valid, false otherwise
 */
Network.prototype.isIPV6 = function (IPV6, specialCheck = false) {
    if (inconsistent(IPV6)) return false
    else if (specialCheck) {
        if (specialCheckAddress(IPV6)) return true
    } else {
        var isValid = true;
        for (let sub of IPV6.split(":"))
            if (!isHex(sub) && !this.isIPV4(sub)) return false
        return isValid;
    }
}

/**
 * Simpliefies a valid IPV6.
 * 
 * @param {string} IPV6 The address to validate
 * @returns {string|boolean} The simplified IPV6 or false
 */
Network.prototype.simplifyIPV6 = function (IPV6) {
    if (this.isIPV6(IPV6)) {
        var ip = ""
        var count = 0
        IPV6 = IPV6.replace(/0{4}/g, '').replace(/:{2,}/, "::")
        for (let sub of IPV6.split(":")) {
            if (sub == '' && count < 2) count++;
            else if (sub == '') ip = ip + "0"
            ip = ip + sub.replace(/^0+/, '') + ":"
        }
        return ip.slice(0, -1)
    } else return false
}

exports.Network = new Network();

/**
 * Checks if the string provided is a valid hex
 * 
 * @private
 * @param {string} hex Hex value to validate a 4 characters hex
 * @returns {boolean} True if the hex is valid
 */
function isHex(hex) {
    hex = hex.replace(/^0+/, '')
    if (hex == "") return true
    else if (parseInt(hex, 16) > parseInt("ffff", 16)) return false
    else return (hex == parseInt(hex, 16).toString(16))
}

/**
 * Checks inconsistency on the IPV6
 * 
 * @private
 * @param {string} IPV6 The address to validate
 * @returns {boolean} *  
 */
function inconsistent(IPV6) {
    if (IPV6 == null || IPV6.length < 2 || IPV6.split(":").length > 8 || IPV6.indexOf(":") == -1) return true
    else {
        var s = IPV6.match(/([:])\1*/g) || [];
        var i = 0
        s.map(function (itm) {
            if (itm.length > 1) i++
        });
        return i > 2
    }
}

/**
 * Checks if the IPV6 is a special address
 * 
 * @private
 * @param {string} IPV6 The address to validate
 * @returns {boolean}
 */
function specialCheckAddress(IPV6) {
    var specialAddresses = ["::/128", "::1/128", "::/96", "::ffff:0:0/96", "fe80::/10", "fec0::/10", "fc00::/7", "ff00::/8"]
    return specialAddresses.indexOf(IPV6) > -1
}