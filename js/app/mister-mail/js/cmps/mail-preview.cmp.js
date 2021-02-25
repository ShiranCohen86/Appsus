// import mailListCmp from "./mail-list.cmp";

export default {
    props: ['mail'],
    template: `
    <section class="mail-preview" :class="{read : isRead}">
            <img class="is-read-logo" :src="isRead ? openMailSrc : closeMailSrc" @click="isRead = !isRead"/>
            <h3>Mail subject:</h3>
            <p>{{mail.subject}}</p>
    </section>
    `,
    data() {
        return {
            isRead: '',
            openMailSrc: 'css/apps/mister-mail/img/open-mail.png',
            closeMailSrc: 'css/apps/mister-mail/img/close-mail.png',
        }
    },
    created() {
        this.isRead = this.mail.isRead
    },
}

