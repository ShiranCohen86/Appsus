import { mailService } from '../services/mail.service.js'
import mailFilter from '../cmps/mail-filter.cmp.js'
import mailList from '../cmps/mail-list.cmp.js'
import { eventBus } from '../services/event-bus-service.js'

export default {
    template: `
        <section class="mail-home-page">
            <mail-filter @filtered="setFilter" />
            <mail-list :mails="mailsToShow" @removeMail="deleteMail" @setIsRead="setIsRead" @setIsStarred="changeStar"/>
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
        deleteMail(mailId) {
            mailService.remove(mailId)
                .then(mail => {
                    const msg = {
                        txt: 'Mail removed successfully',
                        type: 'success'
                    }
                    // eventBus.$emit('show-msg', msg);
                    eventBus.$emit('reloadMails');
                    eventBus.$emit('reloadingMails');
                })
                .catch(err => {
                    console.log(err);
                    const msg = {
                        txt: 'Error, please try again later',
                        type: 'error'
                    }
                })
        },
        setIsRead(mail) {
            mailService.save(mail)
                .then(() => {
                    const msg = {
                        // txt: `You Removed a review from ${this.book.title} book`,
                        type: 'success'
                    }
                    // eventBus.$emit('show-msg', msg);
                    eventBus.$emit('reloadMails');
                    eventBus.$emit('reloadingMails');

                });

        },
        changeStar(mail) {
            mailService.save(mail)
                .then(() => {
                    const msg = {
                        // txt: `You Removed a review from ${this.book.title} book`,
                        type: 'success'
                    }
                    eventBus.$emit('reloadMails');
                    eventBus.$emit('reloadingMails');
                    // eventBus.$emit('show-msg', msg);
                });

        }
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
        eventBus.$on('reloadMails', this.loadMails);
    },
    destroyed() {
        eventBus.$off('reloadMails', this.loadMails);
    },
    components: {
        mailFilter,
        mailList,
    },
}
