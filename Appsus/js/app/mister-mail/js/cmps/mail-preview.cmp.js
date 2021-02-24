export default {
    props: ['mail'],
    template: `
    <section class="mail-preview">
            <h3>Mail subject:</h3>
            <p>{{mail.subject}}</p>
            <h3>mail price:</h3>
            <p>{{mail}}</p>
    </section>
    `,

}

