import mailSideMenu from '../cmps/mail-side-menu.cmp.js'
import { mailService } from '../services/mail.service.js'
import { eventBus } from '../services/event-bus-service.js';

export default {
    template: `
        <section class="mail-app">
            <mail-side-menu :mails="mails"/>
            <router-view/>
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
                .then(mails => {
                    this.mails = mails
                })
        },
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.mails;
            const searchStr = this.filterBy.txt.toLowerCase()
            const mailsToShow = this.mails.filter(mail => {
                return (mail.subject.toLowerCase().includes(searchStr)
                    || mail.body.toLowerCase().includes(searchStr))
                    

            })
            return mailsToShow;
        },
    },
    created() {
        this.loadMails()
        eventBus.$on('reloadingMails', this.loadMails);
    },
    destroyed() {
        eventBus.$off('reloadingMails', this.loadMails);
    },
    components: {
        mailSideMenu,
        eventBus
    },
}
