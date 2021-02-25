import mailHeader from '../cmps/mail-header.cmp.js'
import mailSideMenu from '../cmps/mail-side-menu.cmp.js'
import { mailService } from '../services/mail.service.js'
import { eventBus } from '../services/event-bus-service.js';
// import mailList from '../cmps/mail-list.cmp.js'
import addMail from '../cmps/mail-compose.cmp.js'

export default {
    template: `
        <section class="mail-app">
            <mail-header />
            <router-view />

             <!-- <mail-list :mails="mailsToShow" /> -->
            <!-- <add-mail />  -->
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
        saveMail(mail) {
            console.log(mail);
            mailService.save(mail)
        }
    },
    computed: {
        mailsToShow() {
            return this.mails;
        },
    },
    created() {
        this.loadMails()
        eventBus.$on('reloadMails', this.loadMails);
        eventBus.$on('addMail', this.saveMail);

    },
    components: {
        mailHeader,
        // mailList,
        mailSideMenu,
        addMail
    },
}