import mailHeader from '../cmps/mail-header.cmp.js'
import mailSideMenu from '../cmps/mail-side-menu.cmp.js'
import { mailService } from '../services/mail.service.js'
import { eventBus } from '../services/event-bus-service.js';
import  mailList  from '../cmps/mail-list.cmp.js'

// import userMsg from '../cmps/user-msg.cmp.js'

export default {
    template: `
        <section class="mail-app">
            <!-- <user-msg /> -->
            <mail-header />
            <!-- <mail-filter @filtered="setFilter" /> -->
            <mail-list :mails="mailsToShow" />
            <!-- {{mails}} -->
            <mail-side-menu/>
        </section>
    `,
    data() {
        return {
            mails: [],
            filterBy: null
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        loadMails() {
            mailService.getMails()
                .then(mails => this.mails = mails)
        },
    },
    computed: {
        mailsToShow() {
            return this.mails;
        },
    },
    created() {
        this.loadMails()
    },
    components: {
        mailHeader,
        mailList,
        // userMsg,
        mailSideMenu
    },
}