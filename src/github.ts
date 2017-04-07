const https = require("https");

class Github {
    readonly GITHUB_ENDPOINT = "api.github.com";
    public request = {};
    public constructor() {
        this.request = {
            hostname: this.GITHUB_ENDPOINT,
            path: "",
            headers: {
                "user-agent": "node.js"
            },
            method: ""
        };
    }
    public listUserRepositories = function (username) {
        return new Promise((resolve, reject) => {
            this.request.path = "/users/" + username + "/repos";
            this.request.method = "GET";
            let body = "";

            let req = https.request(this.request, (res) => {
                res.on("data", (chunk) => {
                    body += chunk.toString("utf8");
                });
                res.on("end", () => {
                    return resolve(body)
                });
            });
            req.on("error", (e) => {
                return reject(e)
            });
            req.end();
        });
    };
}

let github = new Github()
export {
    github as Github
}