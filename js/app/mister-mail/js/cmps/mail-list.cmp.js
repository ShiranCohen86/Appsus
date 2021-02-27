import { eventBus } from '../services/event-bus-service.js';
import mailPreview from '../cmps/mail-preview.cmp.js'
import { mailService } from '../services/mail.service.js'
import mailFilter from '../cmps/mail-filter.cmp.js'


export default {
    // props: ['mails'],
    template: `
    <ul class="gallery-mails">
    <mail-filter @filtered="setFilter" />   
        <li v-for="mail in mails" :key="mail.id" class="mail-card" :class="{notRead : mail.isRead}">
            <img class="read-logo" :src="mail.isRead ? openMailSrc : closeMailSrc" @click="changeRead(mail)"/>
            <img class="star-logo" :src="mail.isStarred ? starredSrc : starSrc" @click="changeStar(mail)"/>
            <router-link :to="'/mister-mail/'+mail.id" >Mail Details</router-link>
            <img class="bin-logo" src="css/apps/mister-mail/img/bin.png" @click="deleteMail(mail.id)"/>
            <mail-preview :mail="mail" />
        </li>
    </ul>
    `,
    data() {
        return {
            filterBy: null,
            mails:this.mailsToShow,
            openMailSrc: 'css/apps/mister-mail/img/open-mail.png',
            closeMailSrc: 'css/apps/mister-mail/img/close-mail.png',
            starSrc: 'css/apps/mister-mail/img/star.png',
            starredSrc: 'css/apps/mister-mail/img/starred.png',
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
    },
    methods: {
        changeRead(mail) {
            mail.isRead = !mail.isRead
        },
        changeStar(mail) {
            mail.isStarred = !mail.isStarred
        },
        remove(mailId) {

        },
        loadMails() {
            mailService.getMails()
                .then(mails => {
                    this.mails = mails
                })
        },
    },
     created() {
        this.loadMails()
    },
    components: {
        mailPreview,
        mailFilter
    }
}
