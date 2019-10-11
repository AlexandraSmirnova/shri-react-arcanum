const { assert } = require('chai');

describe('file content', () => {
    it('should show content of file', function () {
        return this.browser
            .url('/file/.gitignore')
            .assertExists('.FileEditor', 'Shown file content');
    });

    it('should show 404 error if file does not exists', function() {
        return this.browser
            .url('/file/strange_name_of_file')
                .assertExists('.Error', 'Shown 404 error');
    });

    it('correct file when long path in url', function () {
        return this.browser
            .url('/file/src/index.js')
                .assertExists('.FileEditor', 'Shown file content')
                .assertTexts('index.js', '.Breadcrumbs .Breadcrumbs-Item:last-child');
    });
});
