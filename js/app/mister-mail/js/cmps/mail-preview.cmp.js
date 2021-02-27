export default {
    props: ['mail'],
    template: `
    <section class="mail-preview" :class="{Read : !mail.isRead}">
            <p>{{mail.subject}}</p>
    </section>
    `,
    methods: {
        deleteMail(mailId) {
            eventBus.$emit('deleteMail', mailId)
        }
    },
}

