// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Learn Basic of Nuxt 3',
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                { name: 'description', content: 'Elit mollit eiusmod in adipisicing reprehenderit occaecat duis id ipsum officia incididunt duis exercitation fugiat.' }
            ]
        },
        pageTransition: {
            name: 'page',
            mode: 'out-in'
        }
    },
    modules: ['@nuxtjs/tailwindcss']

})
