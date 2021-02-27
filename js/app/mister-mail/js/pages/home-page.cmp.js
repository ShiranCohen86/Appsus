import { mailService } from '../services/mail.service.js'
import mailFilter from '../cmps/mail-filter.cmp.js'
import mailList from '../cmps/mail-list.cmp.js'

export default {
    template: `
        <section class="inbox">
            <mail-filter @filtered="setFilter" />
            <mail-list :mails="mailsToShow" />
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
    },
    components: {
        mailFilter,
        mailList,
    },
}
