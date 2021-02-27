// import mailListCmp from "./mail-list.cmp";

export default {
    props: ['mail'],
    template: `
    <section class="mail-preview" :class="{read : isRead}">
            <img class="read-logo" :src="isRead ? openMailSrc : closeMailSrc" @click="isRead = !isRead"/>
            <img class="star-logo" :src="isStarred ? starSrc : starredSrc" @click="isStarred = !isStarred"/>
            <h3>Mail subject:</h3>
            <p>{{mail.subject}}</p>
            <router-link :to="'/mister-mail/'+mail.id">Mail Details</router-link>
            <img class="bin-logo" src="css/apps/mister-mail/img/bin.png" @click="remove(mail.id)"/>
    </section>
    `,
    data() {
        return {
            isRead: '',
            openMailSrc: 'css/apps/mister-mail/img/open-mail.png',
            closeMailSrc: 'css/apps/mister-mail/img/close-mail.png',
            isStarred: '',
            starSrc: 'css/apps/mister-mail/img/star.png',
            starredSrc: 'css/apps/mister-mail/img/starred.png',
        }
    },
    created() {
        this.isRead = this.mail.isRead
        this.isStarred = this.mail.isStarred
    },
}

