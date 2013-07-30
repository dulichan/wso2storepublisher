var caramel = require('caramel');

caramel.configs({
    context: '/publisher-1',
    cache: true,
    negotiation: true,
    themer: function () {
        /*var meta = caramel.meta();
        if(meta.request.getRequestURI().indexOf('gadget') != -1) {
            return 'modern';
        }*/
        return 'wso2mobile';
    }/*,
    languagesDir: '/i18n',
    language: function() {
        return 'si';
    }*/
});