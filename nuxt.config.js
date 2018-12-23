module.exports = {
    loading: {
        color: 'blue'
    },

    head: {
        title: 'Ask! - 물어보세요!',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'}
        ]
    },

    css: [
        {src: 'bulma', lang: 'sass'},
        {src: '~/assets/css/font.scss', lang: 'sass'},
        {src: '../node_modules/@fortawesome/fontawesome-free/css/all.css' }
    ],

    build: {
        vendor: ['axios']
    },

    buildDir: 'dist/client',
    srcDir: 'src/client'
}