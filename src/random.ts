class Random {
    /**
     * Returns a random array of integers
     * 
     * @param   {number} min Minimum value 
     * @param   {number} max Maximum value
     * @param   {number} n Size of the array
     * @return  {Array} 
     */
    public arrayGeneratorInt(min, max, n) {
        if (min > max) return false;
        let array = [];
        for (let i = 0; i < n; i++) array.push(this.getRandomIntInclusive(min, max));
        return array;
    }

    /**
     * Returns a random integer between min and max
     * 
     * @param   {number}            min Minimum value 
     * @param   {number}            max Maximum value
     * @return  {number|boolean} 
     */
    public getRandomIntInclusive(min, max) {
        if (min > max) return false;
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Returns a random string with length n. Available chars are [a-zA-Z0-9].
     * 
     * @param   {number} n Length of the string
     * @return  {string}
     */
    public getRandomString(n) {
        if (n > -1) {
            let s = "";
            let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (let i = 0; i < n; i++) s += chars.charAt(this.getRandomIntInclusive(0, chars.length - 1));
            return s;
        } else return "";
    }
}

let random = new Random();

export {
    random as Random
}