const { assert } = require('chai');

describe('file content', () => {
    it('should show content of file', function () {
        return this.browser
            .url('/file/.gitignore')
            .isExisting('.Header-Logo')
            .then(function (exists) {
                assert.ok(exists, 'Logo exists')
            });
    });

    it('should show 404 error if file does not exists', function() {

    });

    it('correct file when long path in url', function () {

    });
});


describe('navigation', () => {
})