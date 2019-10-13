module.exports = {
    baseUrl: 'http://127.0.0.1:3030',
    gridUrl: 'http://localhost:4444/wd/hub',

    sets: {
        common: {
            files: 'tests'
        }
    },

    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            },
            pageLoadTimeout: 1000000,
        }
    },

    plugins: {
        'html-reporter/hermione': {
            path: 'hermione-html-reporter'
        },
        'hermione-custom-commands': true
    }
};