// import mailListCmp from "./mail-list.cmp";

export default {
    props: ['mail'],
    template: `
    <section class="mail-preview">
            <img class="is-read-logo" :src="imgSrc" @click="toggleIsRead()"></p>
            <h3>Mail subject:</h3>
            <p>{{mail.subject}}</p>
    </section>
    `,
    data() {
        return {
            imgSrc: '',
            isRead: ''
        }
    },
    methods: {
        toggleIsRead() {
            this.isRead = !this.isRead
            this.imgSrc = this.isRead ? '../css/apps/mister-mail/img/open-mail.png' : '../css/apps/mister-mail/img/close-mail.png';
        },
    },
    created() {
        this.isRead = this.mail.isRead
        this.imgSrc = this.isRead ? '../css/apps/mister-mail/img/open-mail.png' : '../css/apps/mister-mail/img/close-mail.png';
    },

}

