
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
            imgSrc: '../css/apps/mister-mail/img/open-mail.png'
        }
    },
    // methods: {
    //     toggleIsRead() {
    //         isReadSrc = mail.isRead ? '../css/apps/mister-mail/img/open-mail.png' : '../css/apps/mister-mail/img/open-mail.png';
    //     },
    // },
    // created: {
    //     // this.imgSrc= isReadSrc
    // },
}

