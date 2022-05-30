import Repository from "../src/repository";
import RecordingProxy from "./recording_proxy.js";

import "mocha";
import { expect } from "chai";
import { after, before, it } from "mocha";

describe('Repository', () => {
    var repository;
    var proxy;

    before((done) => {
        proxy = new RecordingProxy("https://api.github.com");
        proxy.start(() => {
            done();
        });
    });

    after(() => {
        proxy.stop();
    });

    beforeEach(() => {
        repository = new Repository('http://localhost:5544', 'microsoft', 'TypeScript');
        repository.fetch();
    });

    it('should retrieve the correct information', () => {
        expect(repository.name).to.eq('TypeScript');
        expect(repository.description).to.eq(
            'TypeScript is a superset of JavaScript that compiles to clean JavaScript output.'
        );
        expect(repository.homepage).to.eq('https://www.typescriptlang.org');
        expect(repository.license).to.eq('Apache License 2.0');
        expect(repository.language).to.eq('TypeScript');
        expect(repository.defaultBranch).to.eq('main');
    });
});
