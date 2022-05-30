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

        this.name = data.name;
        this.stargazersCount = data.stargazers_count;
        this.watchersCount = data.watchers_count;
        this.forksCount = data.forks_count;
        this.openIssuesCount = data.open_issues_count;
    }
}

export default Repository;