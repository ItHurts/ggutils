class Date {

    /**
     * Checks if year is a leap year
     * 
     * @param   {number}  year 
     * @return  {boolean}
     */
    public isLeapYear(year: number) {
        if (year % 4 !== 0) return false;
        else if (year % 100 !== 0) return true;
        else if (year % 400 !== 0) return false;
        else return true;
    }

    /**
     * Returns an object with the fields: days, hours, minutes and seconds of the time difference
     * between from and to
     * 
     * @param   {Date}      from   Starting date
     * @param   {Date}      to     End date
     * @param   {boolean}   [timezone=false] 
     * @return  {Object}
     */
    public timeDiff(from, to, timezone = false) {
        return {
            days: this.timeDiffDays(from, to, timezone),
            hours: this.timeDiffHours(from, to, timezone),
            minutes: this.timeDiffMinutes(from, to, timezone),
            seconds: this.timeDiffSeconds(from, to, timezone)
        };
    }

    private timeDiffDays(from, to, timezone = false) {
        return Math.floor(((this.getDiffMilliseconds(from, to, timezone)) / (1000 * 60 * 60 * 24)));
    }

    private timeDiffHours(from, to, timezone = false) {
        return Math.floor(((this.getDiffMilliseconds(from, to, timezone)) / (1000 * 60 * 60) % 24));
    }

    private timeDiffMinutes(from, to, timezone = false) {
        return Math.floor(((this.getDiffMilliseconds(from, to, timezone)) / (1000 * 60) % 60));
    }

    private timeDiffSeconds(from, to, timezone = false) {
        return Math.floor(((this.getDiffMilliseconds(from, to, timezone)) / (1000) % 60));
    }

    private calcTimeZoneMilliseconds(from, to) {
        return (to.getTimezoneOffset() - from.getTimezoneOffset()) * 60 * 1000;
    }

    private getDiffMilliseconds(from, to, timezone) {
        return to.getTime() - from.getTime() - ((!timezone) ? this.calcTimeZoneMilliseconds(from, to) : 0);
    }
}

let date = new Date();

export {
    date as Date
}