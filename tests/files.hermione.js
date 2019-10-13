const { assert } = require('chai');

describe('file content', () => {
    it('should show content of file', function () {
        return this.browser
            .url('/file/.gitignore')
            .assertExists('.FileEditor', 'File content was not shown');
    });

    it('should show 404 error if file does not exists', function() {
        return this.browser
            .url('/file/strange_name_of_file')
                .assertExists('.Error', '404 error was not shown');
    });

    it('correct file when long path in url', function () {
        return this.browser
            .url('/file/src/index.js')
                .assertExists('.FileEditor', 'File content was not shown')
                .assertTexts('index.js', '.Breadcrumbs .Breadcrumbs-Item:last-child');
    });
});
