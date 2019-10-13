const { assert } = require('chai');

describe('header', () => {
    it('should find logo', function () {
        return this.browser
            .url('/')
            .assertExists('.Header-Logo', 'Logo do not exists')
    });

    it('should check Repository Toggle View', function () {
        return this.browser
            .url('/')
            .assertExists('.RepositoryToggle', 'RepositoryToggle do not exists')
            .assertView('plain', '.RepositoryToggle')
    });

    it('should change repository in dropdown', function () {
        const firstRepoSelector = '.RepositoryToggle-Item:first-child';
        return this.browser
            .url('/')
            .click('.RepositoryToggle')
            .getText(firstRepoSelector)
            .then((newRepo) =>
                this.browser
                    .click(firstRepoSelector)
                    .assertTexts(newRepo, '.NavDescription-Title')   
            )
    });
});


describe('initialization', () => {
    it('should initialize repository', function () {
        return this.browser
            .url('/')
            .assertExists('.Table', 'Repository is not initialized');
    });
});


