import homePage from './pages/home-page.cmp.js'
// import about from './pages/about.cmp.js'
import misterMail from './app/mister-mail/js/pages/mail-app.js'
import missKeep from './app/miss-keep/js/pages/keep-app.js'
// import missbook from './app/mister-mail/js/pages/mail-app.js'

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
    // {
    //     path: '/book/:bookId',
    //     component: bookDetails
    // },
]

export const myRouter = new VueRouter({ routes })