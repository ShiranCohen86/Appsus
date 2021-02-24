import { myRouter } from './routes.js'

const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section class="main-container-app">
            <user-msg />
            <app-header />
            <router-view />
        </section>
    `,
    components: {
        appHeader,
        userMsg,
    }
}

const app = new Vue(options)