import mailPreview from '../cmps/mail-preview.cmp.js'
import mailFilter from './mail-filter.cmp.js'
import { eventBus } from '../services/event-bus-service.js'
import longText from './long-text.cmp.js'

export default {
    props: ['mails'],
    template: `
    <ul class="gallery-mails">
        <li v-for="mail in mails" :key="mail.id"  :class="{notRead : mail.isRead}">
            <router-link :to="'/mister-mail/'+mail.id" @click..prevent.stop="changeRead(mail)" class="mail-card" >
                <img class="read-logo" :src="mail.isRead ? openMailSrc : closeMailSrc" @click.prevent.stop="changeRead(mail)"/>
                <img class="star-logo" :src="mail.isStarred ? starredSrc : starSrc" @click.prevent.stop="changeStar(mail)"/>
                <mail-preview :mail="mail" />
                <img class="bin-logo" src="css/apps/mister-mail/img/bin.png" @click..prevent.stop="deleteMail(mail.id)"/>
            </router-link>
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
            this.$emit('setIsRead', mail)
        },
        changeStar(mail) {
            mail.isStarred = !mail.isStarred
            this.$emit('setIsStarred', mail)
        },
        deleteMail(mailId) {
            this.$emit('removeMail', mailId)
        },
    },
    components: {
        mailPreview,
        mailFilter,
        eventBus,
        longText
    }
}
