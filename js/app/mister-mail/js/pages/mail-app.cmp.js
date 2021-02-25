import mailHeader from '../cmps/mail-header.cmp.js'
import mailSideMenu from '../cmps/mail-side-menu.cmp.js'
import { mailService } from '../services/mail.service.js'
import { eventBus } from '../services/event-bus-service.js';
import  mailList  from '../cmps/mail-list.cmp.js'

export default {
    template: `
        <section class="mail-app">
            <mail-header />
            <mail-list :mails="mailsToShow" />
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
        eventBus.$on('reloadMails', this.loadMails);
        
    },
    components: {
        mailHeader,
        mailList,
        mailSideMenu
    },
}