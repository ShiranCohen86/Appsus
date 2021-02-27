import { eventBus } from '../services/event-bus-service.js';
import mailPreview from '../cmps/mail-preview.cmp.js'

export default {
    props: ['mails'],
    template: `
    <ul class="gallery-mails">
        <li v-for="mail in mails" :key="mail.id" class="mail-card">
            <!-- <button @click="remove(mail.id)">Delete Mail</button>
            <button @click="remove(mail.id)">star</button>
            <router-link :to="'/mister-mail/'+mail.id">Mail Details</router-link> -->
            <mail-preview :mail="mail" />
        </li>
    </ul>
    `,
    methods: {
        remove(mailId) {
     
        },
    },
    components: {
        mailPreview
    }
}
