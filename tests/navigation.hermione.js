const { assert } = require('chai');

describe('navigation in table', () => {
    it('if click on folder in table chould change page', async function () {
        // 2-ая строка таблицы (после шапки), 1-ая колонка -> директория
        const folderLinkSelector = '.Table .Table-Row:nth-child(2) .Table-Cell:nth-child(1) .Link';
        const breadcrumbFolderSelector = '.Breadcrumbs .Breadcrumbs-Item:last-child';

        const folderName = await this.browser
            .url('/')
            .waitForExist(folderLinkSelector, 3000)
            .getText(folderLinkSelector);

        return this.browser
            .click(folderLinkSelector)
            .assertTexts(folderName, breadcrumbFolderSelector);
    });


    it('should show file content if click on file', function () {
        // допущение: в последней строке таблицы будет ссылка на файл
        const fileLinkSelector = '.Table .Table-Row:last-child .Table-Cell:first-child .Link';

        return this.browser
            .url('/')
            .waitForExist(fileLinkSelector, 3000)
            .click(fileLinkSelector)
            .assertExists('.FileEditor', 'File content shown');
    });
})

describe('navigation in breadcrumbs', () => {
    it('click on first breadcrumb navigate to root dir of repository', function () {
        const breadcrumbSelector = '.Breadcrumbs .Breadcrumbs-Item:first-child';

        return this.browser 
            .url('/file/src/index.js')
            .waitForExist(breadcrumbSelector, 3000)
            .click(breadcrumbSelector)
            .assertExists('.Table', 'Directory content is shown')
    });
});