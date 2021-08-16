import homePage from './pages/home-page.cmp.js'
// import about from './pages/about.cmp.js'
import misterMail from './app/mister-mail/js/pages/mail-app.cmp.js'
import missKeep from './app/miss-keep/js/pages/keep-app.cmp.js'
// import missbook from './app/mister-mail/js/pages/mail-app.js'
import mailDetails from './app/mister-mail/js/pages/mail-details.cmp.js'
// import compose from './app/mister-mail/js/cmps/mail-compose.cmp.js'
// import mailList from './app/mister-mail/js/cmps/mail-list.cmp.js'
import mailHomePage from './app/mister-mail/js/pages/home-page.cmp.js'

const routes = [
    {
        path: '/',
        component: misterMail,
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
        children: [
            {
                path: '/',
                component: mailHomePage
            },
            {
                path: ':mailId',
                component: mailDetails
            },
        ]
    },

]

export const myRouter = new VueRouter({ routes })