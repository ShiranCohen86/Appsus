import bookApp from './pages/book-app.cmp.js'
import homePage from './pages/home-page.cmp.js'
import bookDetails from './pages/book-details.cmp.js'
import about from './pages/about.cmp.js'

const routes = [
    {
        path: '/',
        component: homePage,
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/book',
        component: missBook
    },
    {
        path: '/email',
        component: misterEmail
    },
    {
        path: '/keep',
        component: missKeep
    },
]

export const myRouter = new VueRouter({ routes })