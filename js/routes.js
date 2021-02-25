import homePage from './pages/home-page.cmp.js'
// import about from './pages/about.cmp.js'
import misterMail from './app/mister-mail/js/pages/mail-app.cmp.js'
import missKeep from './app/miss-keep/js/pages/keep-app.cmp.js'
// import missbook from './app/mister-mail/js/pages/mail-app.js'
import mailDetails from './app/mister-mail/js/pages/mail-details.cmp.js'

const routes = [
    {
        path: '/',
        component: homePage,
    },
    // {
    //     path: '/58 or',
    //     component: missBook
    // },
    {
        path: '/miss-keep',
        component: missKeep
    },
    {
        path: '/mister-mail',
        component: misterMail,
    },
    {
        path: '/mister-mail/:mailId',
        component: mailDetails
    },
]

export const myRouter = new VueRouter({ routes })