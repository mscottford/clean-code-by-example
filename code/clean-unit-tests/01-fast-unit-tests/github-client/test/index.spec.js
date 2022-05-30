import Client from "../src/index";

import "mocha";
import { expect } from "chai";

describe('Client', () => {
    var client;

    before(() => {
        client = new Client("https://api.github.com");
    });

    describe('repository', () => {
        var repository;

        beforeEach(() => {
            repository = client.repository('microsoft', 'TypeScript');
        });

        it('should retrive stars', () => {
            expect(repository).to.exist;
        });

        it('should provide access to the repository name', () => {
            expect(repository.name).to.eq('TypeScript');
        });

        it('should provide access to the number of stargazers', () => {
            expect(repository.stargazersCount).to.eq(52341);
        });

        it('should provide access to the number of watchers', () => {
            expect(repository.watchersCount).to.eq(52341);
        });

        it('should provide access to the number of forks', () => {
            expect(repository.forksCount).to.eq(7185);
        })

        it('should provide access to the number of open issues', () => {
            expect(repository.openIssuesCount).to.eq(3676);
        });
    });
});
