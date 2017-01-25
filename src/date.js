Date.prototype.extend = function () {};

/**
 * Checks if year is a leap year
 * 
 * @param   {number}  year 
 * @return  {boolean}
 */
Date.prototype.isLeapYear = function (year) {
    if (year % 4 != 0) return false
    else if (year % 100 != 0) return true
    else if (year % 400 != 0) return false
    else return true
}

/**
 * Returns an object with the fields: days, hours, minutes and seconds
 * 
 * @param   {Date}  from   Starting date
 * @param   {Date}  to     End date
 * @return  {Object}
 */
Date.prototype.timeDiff = function (from, to) {
    return {
        days: this.timeDiffDays(from, to),
        hours: this.timeDiffHours(from, to),
        minutes: this.timeDiffMinutes(from, to),
        seconds: this.timeDiffSeconds(from, to)
    }
}

Date.prototype.timeDiffDays = function (from, to) {
    console.log(((to.getTime() - from.getTime()) / (1000*60*60*24)))
    return Math.floor(((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24)))
}

Date.prototype.timeDiffHours = function (from, to) {
    console.log(((to.getTime() - from.getTime()) / (1000*60*60)))
    return Math.floor(((to.getTime() - from.getTime()) / (1000 * 60 * 60) % 24))
}

Date.prototype.timeDiffMinutes = function (from, to) {
    console.log(((to.getTime() - from.getTime()) / (1000*60)))
    return Math.floor(((to.getTime() - from.getTime()) / (1000 * 60) % 60))
}

Date.prototype.timeDiffSeconds = function (from, to) {
    console.log(((to.getTime() - from.getTime()) / (1000)))
    return Math.floor(((to.getTime() - from.getTime()) / (1000) % 60))
}

exports.Date = new Date();