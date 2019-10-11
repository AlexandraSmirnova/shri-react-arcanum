const assert = require('assert');
const fetch = require('node-fetch');

const LOAD_TIMEOUT = 3000;

const GITHUB_ACCOUNT = 'https://github.com/AlexandraSmirnova/'
const REPOS_FOR_TESTS = [
    'shri-mini-redux',
    'shri-promise-polyfill'
];

module.exports = (hermione, opts) => {
    hermione.on(hermione.events.SESSION_START, async () => {
        // Добавление репозиториев для проверки

        const cloneRepo = (url) => {
            fetch('http://127.0.0.1:3000/api/repos/', {
                method: 'post',
                body: JSON.stringify({ url }),
                headers: { 'Content-Type': 'application/json' }
            })
        };

        REPOS_FOR_TESTS.map((repo) => cloneRepo(`${GITHUB_ACCOUNT}${repo}`));
    });

    hermione.on(hermione.events.NEW_BROWSER, (browser) => {
        browser.addCommand('assertExists', async (selector, msg) => {
            return browser
                .waitForExist(selector, LOAD_TIMEOUT)
                .isExisting(selector)
                .then((exists) => {
                    assert.ok(exists, msg);
                });
        });

        browser.addCommand('assertTexts', async (name, selector) => {
            return browser
                .waitUntil(() => {
                    // Ждем изменения элемента
                    return browser.getText(selector)
                        .then((result) => result === name )
                }, LOAD_TIMEOUT)
                .getText(selector)
                .then((text) => {
                    assert.equal(text, name, 'Texts are equal');
                });
        });
    });

    // hermione.on(hermione.events.SESSION_END, async () => {
    //     // Удаление скачанных репозиториев после проверки

    //     const deleteRepo = (url) => {
    //         fetch(`http://127.0.0.1:3000/api/repos/${url}`, {
    //             method: 'delete',
    //         })
    //     };

    //     REPOS_FOR_TESTS.map(deleteRepo);
    // });
}