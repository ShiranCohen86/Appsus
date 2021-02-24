export default {
    props: ['mail'],
    template: `
    <section class="mail-preview">
            <p class="is-read-logo" :class="{ read : mail.isRead }" @click="toggleIsRead()"></p>
            <h3>Mail subject:</h3>
            <p>{{mail.subject}}</p>
    </section>
    `,
    data() {
        return {
            isRead: ''
        }
    },
    methods: {


    },
    computed: {
        toggleIsRead() {
            console.log('hey');
        },

    },


}

