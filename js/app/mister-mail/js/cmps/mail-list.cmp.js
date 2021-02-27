import mailPreview from '../cmps/mail-preview.cmp.js'
import mailFilter from './mail-filter.cmp.js'

export default {
    props: ['mails'],
    template: `
    <ul class="gallery-mails">
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
            openMailSrc: 'css/apps/mister-mail/img/open-mail.png',
            closeMailSrc: 'css/apps/mister-mail/img/close-mail.png',
            starSrc: 'css/apps/mister-mail/img/star.png',
            starredSrc: 'css/apps/mister-mail/img/starred.png',
        }
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
    },
    components: {
        mailPreview,
        mailFilter
    }
}
