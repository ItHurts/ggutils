class Network {

    /**
     * Checks if the string provided is a valid MAC address
     * 
     * @param   {string}    MAC The address to validate
     * @returns {boolean}   Returns true if the address is valid, false otherwise
     */
    public isMACAddress(MAC: string) {
        let re = /([0-9a-f]{2})(\-)([0-9a-f]{2})(\-)([0-9a-f]{2})(\-)([0-9a-f]{2})(\-)([0-9a-f]{2})(\-)([0-9a-f]{2})/gi;
        let reneg = /[0-9a-f]{3,}/gi;

        if (re.test(MAC) && !reneg.test(MAC)) return true;
        else return false;
    }

    /**
     * Checks if the string provided is a valid IPV4
     * 
     * @param   {string}    IPV4 The address to validate
     * @returns {boolean}   Returns true if the address is valid, false otherwise
     */
    public isIPV4(IPV4) {
        if (IPV4 === null || IPV4.split(".").length - 1 !== 3 || IPV4.split(" ").length - 1 > 0) return false;
        else {
            let isValid = true;
            for (let sub of IPV4.split("."))
                if (sub.length > 3 || sub.length < 1 || Number(sub) > 255 || Number(sub) < 0 || isNaN(Number(sub))) isValid = false;
            return isValid;
        }
    }

    /**
     * Checks if the string provided is a valid IPV6
     * 
     * @param   {string}    IPV6 The address to validate
     * @param   {boolean}   [specialCheck=false] - Enable the check for special addresses
     * @returns {boolean}   True if the address is valid, false otherwise
     */
    public isIPV6(IPV6, specialCheck = false) {
        if (IPV6 == null || IPV6.length < 2 || IPV6.split(":").length > 8 || IPV6.indexOf(":") === -1) return false;
        let s = IPV6.match(/([:])\1*/g) || [];
        let i = 0;
        s.map(function (itm) {
            if (itm.length > 1) i++;
        });
        if (i > 2) return false;
        else if (specialCheck) {
            if (this.specialCheckAddress(IPV6)) return true;
        } else {
            let isValid = true;
            for (let sub of IPV6.split(":"))
                if (!this.isHex(sub) && !this.isIPV4(sub)) return false;
            return isValid;
        }
    }

    /**
     * Checks if the IPV6 is a special address
     * 
     * @private
     * @param   {string}    IPV6 The address to validate
     * @returns {boolean}
     */
    private specialCheckAddress(IPV6) {
        let specialAddresses = ["::/128", "::1/128", "::/96", "::ffff:0:0/96", "fe80::/10", "fec0::/10", "fc00::/7", "ff00::/8"];
        return specialAddresses.indexOf(IPV6) > -1;
    }

    /**
     * Checks if the string provided is a valid hex
     * 
     * @private
     * @param   {string}    hex Hex value to validate a 4 characters hex
     * @returns {boolean}   True if the hex is valid
     */
    private isHex(hex) {
        hex = hex.replace(/^0+/, "");
        if (hex === "") return true;
        else if (parseInt(hex, 16) > parseInt("ffff", 16)) return false;
        else return (hex === parseInt(hex, 16).toString(16));
    }

    /**
     * Simpliefies a valid IPV6.
     * 
     * @param   {string}            IPV6 The address to validate
     * @returns {string|boolean}    The simplified IPV6 or false
     */
    public simplifyIPV6 = function (IPV6) {
        if (this.isIPV6(IPV6)) {
            let ip = "";
            let count = 0;
            IPV6 = IPV6.replace(/0{4}/g, "").replace(/:{2,}/, "::");
            for (let sub of IPV6.split(":")) {
                if (sub === "" && count < 2) count++;
                else if (sub === "") ip = ip + "0";
                ip = ip + sub.replace(/^0+/, "") + ":";
            }
            return ip.slice(0, -1);
        } else return false;
    };
}

let network = new Network();

export {
    network as Network
}
