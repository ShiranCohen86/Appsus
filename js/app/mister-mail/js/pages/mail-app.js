import mailHeader from '../cmps/mail-header.cmp.js'
// import mailSideMenu from '../cmps/mail-side-menu.cmp.cmp.js'
// import userMsg from '../cmps/user-msg.cmp.js'

export default {
    template: `
        <section class="mail-app">
            <!-- <user-msg /> -->
            <mail-header />
            <!-- <mail-side-menu/> -->
            <router-view />
        </section>
    `,
    components: {
        mailHeader,
        // userMsg,
        // mailSideMenu
    }
}