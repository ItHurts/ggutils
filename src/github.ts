const https = require("https");
const querystring = require("querystring");

class Github {
    readonly GITHUB_ENDPOINT = "api.github.com";
    public request = {};

    public constructor() {
        this.request = {
            hostname: this.GITHUB_ENDPOINT,
            path: "/",
            headers: {
                "user-agent": "node.js"
            },
            method: null,
            auth: null
        };
    }

    /**
     * Repositories
     */

    /** 
     * Provides an array of the user's repository of the 
     * @async 
     */
    public listUserRepositories = function (user, parameters) {
        this.request.path = "/users/" + user + "/repos?" + querystring.stringify(parameters);
        this.request.method = "GET";
        return this.promise();
    };

    public listYourRepositories = function (parameters) {
        this.request.path = "/user/repos?" + querystring.stringify(parameters);
        this.request.method = "GET";
        return this.promise();
    };

    public setCredentials = function (user, password) {
        let auth = "Basic " + new Buffer(user + ":" + password).toString("base64");
        this.request.auth = user + ":" + password;
    };

    public unsetCredentials = function () {
        this.request["auth"] = null;
    };

    private promise = function () {
        return new Promise((resolve, reject) => {
            let body = "";
            let req = https.request(this.request, (res) => {
                res.on("data", (chunk) => {
                    body += chunk.toString("utf8");
                });
                res.on("end", () => {
                    return resolve(body);
                });
            });
            req.on("error", (e) => {
                return reject(e);
            });
            req.end();
        });
    };
}

let github = new Github();
export {
    github as Github
}