var ASSERT = chai.assert;
mocha.setup({
    ui: 'bdd'
});
requirejs.config({
    paths: {
        forge: 'forge',
        test: 'test'
    }
});
requirejs([
    'test/util',
    'test/md5',
    'test/sha1',
    'test/sha256',
    'test/rsa',
    'test/aes',
    'test/tls'
], function() {
    mocha.run();
});