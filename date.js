var Date = function () {};

/**
 * Checks if year is a leap year
 * 
 * @param {number} year 
 * @return {boolean}
 */
Date.prototype.isLeapYear = function (year) {
    if (year % 4 != 0) return false
    else if (year % 100 != 0) return true
    else if (year % 400 != 0) return false
    else return true
}

exports.Date = new Date();