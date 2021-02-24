import appSusHeader from './cmps/appSus-header.cmp.js'
import appSusFooter from './cmps/appSus-footer.cmp.js'
import { myRouter } from './routes.js'
// import userMsg from './cmps/user-msg.cmp.js'


const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section class="main-container-app">
            <!-- <user-msg> -->
            <appSus-header />
            <router-view />
            <appSus-footer />
        </section>
    `,
    components: {
        appSusHeader,
        // userMsg,
        appSusFooter
    }
}

const app = new Vue(options)

