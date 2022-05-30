import Repository from "./repository";

class Client {
    constructor(apiBaseUrl) {
        this.apiBaseUrl = apiBaseUrl;
    }

    repository(organizationName, repositoryName) {
        var result = new Repository(this.apiBaseUrl, organizationName, repositoryName);
        result.fetch();
        return result;
    }
}

export default Client;
