import mailHeader from '../cmps/mail-header.cmp.js'
import mailSideMenu from '../cmps/mail-side-menu.cmp.js'
import { mailService } from '../services/mail.service.js'
import { eventBus } from '../services/event-bus-service.js';

export default {
    template: `
        <section class="mail-app">
            <mail-header />
            <mail-side-menu/>
            <book-filter @filtered="setFilter" />
            <book-list :books="booksToShow"  />
        </section>
    `,
    data() {
        return {
            mails: [],
        }
    },
    methods: {
        loadMails() {
            mailService.getMails()
                .then(mails => {
                    this.mails = mails
                    eventBus.$emit('getEmails', this.mails)
                })
        },
        deleteMail(mail) {
            mailService.remove(mail)
            this.loadMails

        },
        saveMail(mail) {
            mailService.save(mail)
        },
        getMailById(mailId) {
            mailService.getById(mailId)
            .then (mail => eventBus.$emit('mailById', mail))
        }

    },
    created() {
        mailService.createMails()
        this.loadMails()
        eventBus.$on('reloadMails', this.loadMails);
        eventBus.$on('addMail', this.saveMail);
        eventBus.$on('deleteMail', this.deleteMail);
    },
    destroyed() {
        eventBus.$off('reloadMails', this.loadMails);
        eventBus.$off('addMail', this.saveMail);
        eventBus.$off('deleteMail', this.deleteMail);

    },
    components: {
        mailHeader,
        mailSideMenu,
    },
}