import longText from './long-text.cmp.js'

export default {
    props: ['mail'],
    template: `
    <section class="mail-preview">
            <p>{{mail.subject}}</p>
            <long-text :txt="mail.body" />
    </section>
    `,
    components:{
        longText
    }
}

