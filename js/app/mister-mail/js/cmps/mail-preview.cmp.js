export default {
    props: ['mail'],
    template: `
    <section class="mail-preview">
            <p :class="{ fill : mail.isRead }">✉</p>
            <h3>Mail subject:</h3>
            <p>{{mail.subject}}</p>
    </section>
    `,

}

