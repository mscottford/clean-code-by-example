import { XMLHttpRequest } from 'xmlhttprequest';

class Repository {
    constructor(apiBaseUrl, organizationName, repositoryName) {
        this._apiBaseUrl = apiBaseUrl;
        this._providedOrganizationName = organizationName;
        this._providedName = repositoryName;
    }

    fetch() {
        var url = `${this._apiBaseUrl}/repos/` +
            `${this._providedOrganizationName}/${this._providedName}`;

        var request = new XMLHttpRequest();
        request.open("GET", url, /* async: */ false);
        request.send();

        var data = JSON.parse(request.responseText);

        if (request.status != 200) {
            throw new Error(data.message);
        }

        this.name = data.name;
        this.description = data.description;
        this.homepage = data.homepage;
        this.license = data.license.name;
        this.language = data.language;
        this.defaultBranch = data.default_branch;
    }
}

export default Repository;